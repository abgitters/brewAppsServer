const mongoose = require("mongoose");

const url = `${process.env.DB_URL}`;

mongoose.connect(url, (err) => {
  if (err) console.log("could not connected to db ", err);
  else console.log("connected to db");
});

const conn = mongoose.connection;

conn.on("disconnected", () => {
  console.log("disconnected from db");
});

conn.on("error", (err) => {
  console.log("could not connected to db", err);
});
