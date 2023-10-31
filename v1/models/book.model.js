const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const userSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  summary: String,
});

userSchema.plugin(AutoIncrement, { inc_field: "id" });

module.exports = mongoose.model("User", userSchema);
