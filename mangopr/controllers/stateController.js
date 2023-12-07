const State = require("../model/State");

// Get All State
const state_all = async (req, res) => {
    try {
        const states = await State.find();
        res.json(states);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single state
const state_details = async (req, res) => {
    try {
        const state = await State.findById(req.params.stateId);
        res.json(state);
      } catch (error) {
        res.json({ message: error });
      }
};


const state_create = async (req, res) => {
  if (!req.body.state_name) {
      res.status(400).send({ message: "Content can not be empty!" });
  }
  
  const state = new State({
    srid: req.body.srid,
    state_name: req.body.state_name,
    country_name: req.body.country_name,
    created: new Date()
  });
  console.log(state);
  await state.save().then(data => {
      res.send({
          message:"State created successfully!!",
          state:data
      });
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating user"
      });
  });
};

// Add New student
// Update state
const state_update = async (req, res) => {
    try {
        const state = {
            srid: req.body.srid,
            state_name: req.body.state_name,
            country_name: req.body.country_name,
        };
        
        const updatedState = await State.findByIdAndUpdate(
          { _id: req.params.stateId },
          state_name
        );
        res.json(updatedState);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete state
const state_delete = async (req, res) => {
    try {
        const removeState = await State.findByIdAndDelete(req.params.stateId);
        res.json(removeState);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    state_all, 
    state_details, 
    state_create, 
    state_update, 
    state_delete
  }