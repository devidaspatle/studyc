const Product = require("../model/Product");

// Get All products
const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single product
const product_details = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New product
const product_create = async (req, res) => {
  if (!req.body.shop_name && !req.body.product_name && !req.body.category_name && !req.body.author_name && !req.body.price && !req.body.discount_price && !req.body.ibsn_number && !req.body.additional_year) {
    res.status(400).send({ message: "Content can not be empty!" });
}

const product = new Product({
  shop_name: req.body.shop_name,
  product_name: req.body.product_name,
  category_name: req.body.category_name,
  author_name: req.body.author_name,
  price: req.body.price,
  discount_price: req.body.discount_price,
  ibsn_number: req.body.ibsn_number,
  additional_year: req.body.additional_year
});

await product.save().then(data => {
    res.send({
        message:"Product created successfully!!",
        product:data
    });
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating user"
    });
});
};

// Update product
const product_update = async (req, res) => {
    try {
        const product = {
          shop_name: req.body.shop_name,
          product_name: req.body.product_name,
          category_name: req.body.category_name,
          author_name: req.body.author_name,
          price: req.body.price,
          discount_price: req.body.discount_price,
          ibsn_number: req.body.ibsn_number,
          additional_year: req.body.additional_year
        };
        
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete product
const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    product_all, 
    product_details, 
    product_create, 
    product_update, 
    product_delete
  }