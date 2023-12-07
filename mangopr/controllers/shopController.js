const Shop = require("../model/Shop");

// Get All Shops
const shop_all = async (req, res) => {
    try {
        const shops = await Shop.find();
        res.json(shops);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single shop
const shop_details = async (req, res) => {
    try {
        const shop = await Shop.findById(req.params.shopId);
        res.json(shop);
      } catch (error) {
        res.json({ message: error });
      }
};

// Create and Save a new user
const shop_create = async (req, res) => {
  if (!req.body.shop_name && !req.body.fullname && !req.body.mobile && !req.body.emaiid && !req.body.state && !req.body.city && !req.body.address && !req.body.location_map) {
      res.status(400).send({ message: "Content can not be empty!" });
  }
  
  const shop = new Shop({
    shop_name: req.body.shop_name,
    fullname: req.body.fullname,
    mobile: req.body.mobile,
    emaiid: req.body.emaiid,
    state: req.body.state,
    city: req.body.city,
    address: req.body.address,
    location_map: req.body.location_map
  });
  
  await shop.save().then(data => {
      res.send({
          message:"Shop created successfully!!",
          shop:data
      });
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating user"
      });
  });
};

// Update shop
const shop_update = async (req, res) => {
    try {
        const shop = {
            shop_name: req.body.shop_name,
            fullname: req.body.fullname,
            mobile: req.body.mobile,
            emaiid: req.body.emaiid,
            state: req.body.state,
            city: req.body.city,
            address: req.body.address,
            location_map: req.body.location_map
        };
        
        const updatedShop = await Shop.findByIdAndUpdate(
          { _id: req.params.shopId },
          shop
        );
        res.json(updatedShop);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete Ship
const shop_delete = async (req, res) => {
    try {
        const removeShop = await Shop.findByIdAndDelete(req.params.shopId);
        res.json(removeShop);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    shop_all, 
    shop_details, 
    shop_create, 
    shop_update, 
    shop_delete
  }