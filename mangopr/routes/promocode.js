const router = require("express").Router();
const promocodeController = require('../controllers/promocodeController');

router.post("/", promocodeController.promocode_create);
router.get("/", promocodeController.promocode_all);
router.get("/:promocodeId", promocodeController.promocode_details);
router.put("/:promocodeId", promocodeController.promocode_update);
router.delete("/:promocodeId", promocodeController.promocode_delete);

module.exports = router;
