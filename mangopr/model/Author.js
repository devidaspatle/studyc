const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  author_name: String
});

module.exports = mongoose.model("Author", authorSchema);