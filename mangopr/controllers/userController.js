const User = require("../model/User");
const bcrypt = require("bcryptjs");
// Get All students
const user_all = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single user
const user_details = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
      } catch (error) {
        res.json({ message: error });
      }
};

// Create and Save a new user
const user_create = async (req, res) => {
  if (!req.body.usertype && !req.body.fullname && !req.body.mobile && !req.body.emailid && !req.body.password) {
      res.status(400).send({ message: "Content can not be empty!" });
  }
  const encryptedPassword = await bcrypt.hash(req.body.password, 10);
  const email = req.body.emailid.toLowerCase();
 //console.log(encryptedPassword);
  const user = new User({
    usertype: req.body.usertype,
    fullname: req.body.fullname,
    mobile: req.body.mobile,
    emailid: email,
    password: encryptedPassword
  });
  //console.log(user);
  //const oldUser = await User.findOne(email)
 // if(oldUser) {
   // return res.status(409).send("User Already Exist. Please Login");
 // }
  await user.save().then(data => {
      res.send({
          message:"User created successfully!!",
          user:data
      });
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating user"
      });
  });
};

// Add New user

// Update user
const user_update = async (req, res) => {
  if(!req.body) {
      res.status(400).send({
          message: "Data to update can not be empty!"
      });
  }
  
  const id = req.params.id;
  
  await User.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
  
      if (!data) {
          res.status(404).send({
              message: `User not found.`
          });
      }else{
          res.send({ message: "User updated successfully." })
      }
  }).catch(err => {
      res.status(500).send({
          message: err.message
      });
  });
};


// Delete user
const user_delete = async (req, res) => {
    try {
        const removeUser = await User.findByIdAndDelete(req.params.id);
        res.json(removeUser);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    user_all, 
    user_details, 
    user_create, 
    user_update, 
    user_delete
  }