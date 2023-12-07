const router = require("express").Router();
const shopController = require('../controllers/shopController');

router.post("/", shopController.shop_create);
router.get("/", shopController.shop_all);
router.get("/:shopId", shopController.shop_details);
router.put("/:shopId", shopController.shop_update);
router.delete("/:shopId", shopController.shop_delete);

module.exports = router;
