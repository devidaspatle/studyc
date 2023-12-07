const Advertise = require("../model/Advertise");

// Get All students
const advertise_all = async (req, res) => {
    try {
        const advertises = await Advertise.find();
        res.json(advertises);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single advertise
const advertise_details = async (req, res) => {
    try {
        const advertise = await Advertise.findById(req.params.advertiseId);
        res.json(advertise);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New advertise


// Create and Save a new user
const advertise_create = async (req, res) => {
  if (!req.body.title && !req.body.scriptcode && !req.body.startdate && !req.body.enddate && !req.body.images && !req.body.created) {
      res.status(400).send({ message: "Content can not be empty!" });
  }
  
  const advertise = new Advertise({
    title: req.body.title,
    scriptcode: req.body.scriptcode,
    startdate: req.body.startdate,
    enddate: req.body.enddate,
    images: req.body.images,
    created: new Date()
  });
  await advertise.save().then(data => {
      res.send({
          message:"Advertise created successfully!!",
          advertise:data
      });
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating user"
      });
  });
};
// Add New student
 
// Update student
const advertise_update = async (req, res) => {
    try {
        const advertise = {
            title: req.body.title,
            scriptcode: req.body.scriptcode,
            startdate: req.body.startdate,
            enddate: req.body.enddate,
            images: req.body.images,
            created: req.body.created,
        };
        
        const updatedAdvertise = await Advertise.findByIdAndUpdate(
          { _id: req.params.advertiseId },
          advertise
        );
        res.json(updatedAdvertise);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete advertise
const advertise_delete = async (req, res) => {
    try {
        const removeAdvertise = await book.findByIdAndDelete(req.params.advertiseId);
        res.json(removeAdvertise);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    advertise_all, 
    advertise_details, 
    advertise_create, 
    advertise_update, 
    advertise_delete
  }