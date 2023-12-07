const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullname: String,
  mobile: String,
  emaiid: String,
  state: String,
  city: String,
  address: String,
  location_map: String
});

module.exports = mongoose.model("Student", studentSchema);