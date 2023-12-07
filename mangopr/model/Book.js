const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  book_name: String,
  category_name: String,
  author_name: String,
  price: String,
  discount_price: String,
  ibsn_number: String,
  additional_year: String
});

module.exports = mongoose.model("Book", bookSchema);