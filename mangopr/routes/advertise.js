const router = require("express").Router();
const advertiseController = require('../controllers/advertiseController');

router.post("/", advertiseController.advertise_create);
router.get("/", advertiseController.advertise_all);
router.get("/:advertiseId", advertiseController.advertise_details);
router.put("/:advertiseId", advertiseController.advertise_update);
router.delete("/:advertiseId", advertiseController.advertise_delete);

module.exports = router;
