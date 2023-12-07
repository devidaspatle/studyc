const router = require("express").Router();
const stateController = require('../controllers/stateController');

router.post("/", stateController.state_create);
router.get("/", stateController.state_all);
router.get("/:stateId", stateController.state_details);
router.put("/:stateId", stateController.state_update);
router.delete("/:stateId", stateController.state_delete);

module.exports = router;
