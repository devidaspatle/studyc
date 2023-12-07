const Category = require("../model/Category");

// Get All Categories
const category_all = async (req, res) => {
    try {
        const categorys = await Category.find();
        res.json(categorys);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single category
const category_details = async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId);
        res.json(category);
      } catch (error) {
        res.json({ message: error });
      }
};


// Add New category
const category_create = async (req, res) => {
  if (!req.body.category_name) {
    res.status(400).send({ message: "Content can not be empty!" });
}

const category = new Category({
  category_name: req.body.category_name,
  created: new Date()
});
console.log(category);
await category.save().then(data => {
    res.send({
        message:"Category created successfully!!",
        category:data
    });
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating user"
    });
});
};

// Update category
const category_update = async (req, res) => {
    try {
        const category = {
          category_name: req.body.category_name,
        };
        
        const updatedCategory = await Category.findByIdAndUpdate(
          { _id: req.params.categoryId },
          category
        );
        res.json(updatedCategory);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete category
const category_delete = async (req, res) => {
    try {
        const removeCategory = await Category.findByIdAndDelete(req.params.categoryId);
        res.json(removeCategory);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    category_all, 
    category_details, 
    category_create, 
    category_update, 
    category_delete
  }