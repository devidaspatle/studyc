const mongoose = require("mongoose");

const membershipplanSchema = new mongoose.Schema({
  plan_type: String,
  description: String,
  price: String,
});

module.exports = mongoose.model("Membershipplan", membershipplanSchema);