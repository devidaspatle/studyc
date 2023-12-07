const mongoose = require("mongoose");

const advertiseSchema = new mongoose.Schema({
  title: String,
  scriptcode: String,
  startdate: String,
  enddate: String,
  images: String,
  created: String
});

module.exports = mongoose.model("Advertise", advertiseSchema);

  
  
  