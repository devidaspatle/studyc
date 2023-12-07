const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
shop_name: String,
product_name: String,
category_name: String,
author_name: String,
price: String,
discount_price: String,
ibsn_number: String,
additional_year: String
});

module.exports = mongoose.model("Product", productSchema);
