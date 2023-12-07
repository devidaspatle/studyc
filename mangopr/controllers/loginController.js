const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Get All students

module.exports = {
    secret: "bezkoder-secret-key"
  };
// Create and Save a new user
const user_login = async (req, res) => {
  if (!req.body.emailid && !req.body.password) {
      res.status(400).send({ message: "Content can not be empty!" });
  }
  User.findOne({
    emailid: req.body.emailid,
  })

    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }

      res.status(200).send({
        id: user._id,
        fullname: user.fullname,
        emailid: user.emailid,
      });
    

    });
};

const signout = async (req, res) => {
    try {
      req.session = null;
      return res.status(200).send({ message: "You've been signed out!" });
    } catch (err) {
      this.next(err);
    }
  };
module.exports = {
    user_login,
    signout
  }

  