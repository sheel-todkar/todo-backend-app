const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Todo", todoSchema);
