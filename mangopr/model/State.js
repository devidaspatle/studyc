const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  srid: String,
  state_name: String,
  country_name: String
});

module.exports = mongoose.model("State", stateSchema);