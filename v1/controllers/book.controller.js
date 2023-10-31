const _ = require("lodash");
const BookModel = require("../models/book.model");

class BookCtrl {
  static pickBook(user) {
    return _.pick(user, ["_id", "title", "author", "summary"]);
  }

  static createBook(req, res) {
    const user = req.body;
    new BookModel(user)
      .save()
      .then((result) => {
        res
          .status(201)
          .send({ message: "User Created", data: BookCtrl.pickBook(result) });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "User not Created", error: err });
      });
  } //createBook

  static updateBook(req, res) {
    const { id } = req.params;
    const book = req.body;

    BookModel.findOneAndUpdate({ id: id }, book, { new: true })
      .then((result) => {
        res.status(200).send({ message: "Book updated...", data: result });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ message: "Cound not update the book", data: err });
      });
  } //updateBook

  static getAllBook(req, res) {
    BookModel.find()
      .then((result) => {
        res.status(200).send({ message: "Product Details...", data: result });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ message: "Could not fetch the product", data: err });
      });
  } //getAllbook

  static getOneBook(req, res) {
    const { id } = req.params;
    BookModel.findOne({ id: id })
      .then((result) => {
        res.status(201).send({ message: "Book Details", data: result });
      })
      .catch((err) => {
        console.log(err);
        res
          .send(500)
          .send({ message: "Could not fetch the product", data: err });
      });
  } //getOneBook

  static deleteBook(req, res) {
    const { id } = req.params;

    BookModel.findOneAndDelete({ id: id })
      .then((result) => {
        res.status(200).send({ message: "Book deleted...", data: result });
      })
      .catch((err) => {
        console.log(err);
        res
          .send(500)
          .send({ message: "Cound not deleted the book", error: err });
      });
  } //deletebook
}

module.exports = BookCtrl;
