const Promocode = require("../model/Promocode");

// Get All Promocode
const promocode_all = async (req, res) => {
    try {
        const promocodes = await Promocode.find();
        res.json(promocodes);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single Promocode
const promocode_details = async (req, res) => {
    try {
        const promocode = await Promocode.findById(req.params.promocodeId);
        res.json(promocode);
      } catch (error) {
        res.json({ message: error });
      }
};

// Create and Save a new user
const promocode_create = async (req, res) => {
  if (!req.body.promocode && !req.body.price) {
      res.status(400).send({ message: "Content can not be empty!" });
  }
  
  const promocodes = new Promocode({
    promocode: req.body.promocode,
    price: req.body.price
  });
  
  await promocodes.save().then(data => {
      res.send({
          message:"Promocode created successfully!!",
          promocodes:data
      });
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating user"
      });
  });
};
// Add New Promocode

// Update Promocode
const promocode_update = async (req, res) => {
  if(!req.body) {
      res.status(400).send({
          message: "Data to update can not be empty!"
      });
  }
  
  const id = req.params.id;
  
  await Promocode.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
    console.log(data);
      if (!data) {
          res.status(404).send({
              message: `Promocode not found.`
          });
      }else{
          res.send({ message: "Promocode updated successfully." })
      }
  }).catch(err => {
      res.status(500).send({
          message: err.message
      });
  });
};


// Delete promocode
const promocode_delete = async (req, res) => {
    try {
        const removePromocode = await Promocode.findByIdAndDelete(req.params.id);
        res.json(removePromocode);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    promocode_all, 
    promocode_details, 
    promocode_create, 
    promocode_update, 
    promocode_delete
  }