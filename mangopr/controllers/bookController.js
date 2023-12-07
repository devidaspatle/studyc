const Book = require("../model/Book");

// Get All students
const book_all = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single student
const book_details = async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId);
        res.json(book);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New student
const book_create = async (req, res) => {
    const book = new Book({
        book_name: req.body.book_name,
        category_name: req.body.category_name,
        author_name: req.body.author_name,
        price: req.body.price,
        discount_price: req.body.discount_price,
        ibsn_number: req.body.ibsn_number,
        additional_year: req.body.additional_year
      });
      console.log(book);
      try {
        const savedBook = await Book.save();
        res.send(savedBook);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update student
const book_update = async (req, res) => {
    try {
        const book = {
            book_name: req.body.book_name,
            category_name: req.body.category_name,
            author_name: req.body.author_name,
            price: req.body.price,
            discount_price: req.body.discount_price,
            ibsn_number: req.body.ibsn_number,
            additional_year: req.body.additional_year
        };
        
        const updatedBook = await Book.findByIdAndUpdate(
          { _id: req.params.bookId },
          book
        );
        res.json(updatedBook);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete student
const book_delete = async (req, res) => {
    try {
        const removeBook = await book.findByIdAndDelete(req.params.bookId);
        res.json(removeBook);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    book_all, 
    book_details, 
    book_create, 
    book_update, 
    book_delete
  }