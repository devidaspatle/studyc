const Author = require("../model/Author");

// Get All Author
const author_all = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single author
const author_details = async (req, res) => {
    try {
        const author = await Author.findById(req.params.authorId);
        res.json(author);
      } catch (error) {
        res.json({ message: error });
      }
};


const author_create = async (req, res) => {
  if (!req.body.author_name) {
      res.status(400).send({ message: "Content can not be empty!" });
  }
  
  const author = new Author({
    author_name: req.body.author_name,
    created: new Date()
  });
  console.log(author);
  await author.save().then(data => {
      res.send({
          message:"Author created successfully!!",
          author:data
      });
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating user"
      });
  });
};

// Add New student
// Update author
const author_update = async (req, res) => {
    try {
        const author = {
            author_name: req.body.author_name,
        };
        
        const updatedAuthor = await Author.findByIdAndUpdate(
          { _id: req.params.authorId },
          author
        );
        res.json(updatedAuthor);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete author
const author_delete = async (req, res) => {
    try {
        const removeAuthor = await Author.findByIdAndDelete(req.params.authorId);
        res.json(removeAuthor);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    author_all, 
    author_details, 
    author_create, 
    author_update, 
    author_delete
  }