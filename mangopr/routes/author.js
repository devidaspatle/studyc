const router = require("express").Router();
const authorController = require('../controllers/authorController');

router.post("/", authorController.author_create);
router.get("/", authorController.author_all);
router.get("/:authorId", authorController.author_details);
router.put("/:authorId", authorController.author_update);
router.delete("/:authorId", authorController.author_delete);

module.exports = router;
