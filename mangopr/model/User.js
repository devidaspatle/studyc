const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  usertype: String,
  fullname: String,
  mobile: String,
  emailid: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);