const router = require("express").Router();
const membershipplanController = require('../controllers/membershipplanController');

router.post("/", membershipplanController.membershipplan_create);
router.get("/", membershipplanController.membershipplan_all);
router.get("/:membershipplanId", membershipplanController.membershipplan_details);
router.put("/:membershipplanId", membershipplanController.membershipplan_update);
router.delete("/:membershipplanId", membershipplanController.membershipplan_delete);

module.exports = router;
