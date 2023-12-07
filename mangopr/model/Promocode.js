const mongoose = require("mongoose");

const promocodeSchema = new mongoose.Schema({
  promocode: String,
  price: String
});

module.exports = mongoose.model("Promocode", promocodeSchema);