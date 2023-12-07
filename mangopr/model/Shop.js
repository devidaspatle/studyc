const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  shop_name: String,
  fullname: String,
  mobile: String,
  emailid: String,
  state: String,
  city: String,
  address: String,
  location_map: String
});

module.exports = mongoose.model("Shop", shopSchema);