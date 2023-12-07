const router = require("express").Router();
const bookController = require('../controllers/bookController');

router.post("/", bookController.book_create);
router.get("/", bookController.book_all);
router.get("/:bookId", bookController.book_details);
router.put("/:bookId", bookController.book_update);
router.delete("/:bookId", bookController.book_delete);

module.exports = router;
