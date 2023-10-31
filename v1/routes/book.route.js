const BookRouter = require("express").Router();

const {
  createBook,
  getOneBook,
  getAllBook,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

BookRouter.get("/", getAllBook);
BookRouter.get("/:id", getOneBook);
BookRouter.put("/:id", updateBook);
BookRouter.delete("/:id", deleteBook);
BookRouter.post("/", createBook);

module.exports = BookRouter;
