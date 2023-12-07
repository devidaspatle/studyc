const Membershipplan = require("../model/Membershipplan");

// Get All Membershipplan
const membershipplan_all = async (req, res) => {
    try {
        const membershipplans = await Membershipplan.find();
        res.json(membershipplans);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single membershipplan
const membershipplan_details = async (req, res) => {
    try {
        const membershipplan = await Membershipplan.findById(req.params.promocodeId);
        res.json(membershipplan);
      } catch (error) {
        res.json({ message: error });
      }
};

// Create and Save a new user
const membershipplan_create = async (req, res) => {
  if (!req.body.plan_type && !req.body.description && !req.body.price) {
      res.status(400).send({ message: "Content can not be empty!" });
  }
  const membershipplan = new Membershipplan({
    plan_type: req.body.plan_type,
    description: req.body.description,
    price: req.body.price
    
  });
  
  await membershipplan.save().then(data => {
      res.send({
          message:"Membershipplan created successfully!!",
          membershipplan:data
      });
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating user"
      });
  });
};
// Add New Membershipplan

// Update Membershipplan
const membershipplan_update = async (req, res) => {
  if(!req.body) {
      res.status(400).send({
          message: "Data to update can not be empty!"
      });
  }
  
  const id = req.params.id;
  
  await Membershipplan.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
    console.log(data);
      if (!data) {
          res.status(404).send({
              message: `Membershipplan not found.`
          });
      }else{
          res.send({ message: "Membershipplan updated successfully." })
      }
  }).catch(err => {
      res.status(500).send({
          message: err.message
      });
  });
};


// Delete promocode
const membershipplan_delete = async (req, res) => {
    try {
        const removeMembershipplan = await Membershipplan.findByIdAndDelete(req.params.id);
        res.json(removeMembershipplan);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    membershipplan_all, 
    membershipplan_details, 
    membershipplan_create, 
    membershipplan_update, 
    membershipplan_delete
  }