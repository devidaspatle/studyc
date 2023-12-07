const router = require("express").Router();
const categoryController = require('../controllers/categoryController');

router.post("/", categoryController.category_create);
router.get("/", categoryController.category_all);
router.get("/:categoryId", categoryController.category_details);
router.put("/:categoryId", categoryController.category_update);
router.delete("/:categoryId", categoryController.category_delete);

module.exports = router;
