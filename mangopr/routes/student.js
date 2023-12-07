const router = require("express").Router();
const studentController = require('../controllers/studentController');

router.post("/", studentController.student_create);
router.get("/", studentController.student_all);
router.get("/:studentId", studentController.student_details);
router.put("/:studentId", studentController.student_update);
router.delete("/:studentId", studentController.student_delete);

module.exports = router;
