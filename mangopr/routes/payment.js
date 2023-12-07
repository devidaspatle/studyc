const router = require("express").Router();
const paymentController = require('../controllers/paymentController');

router.post("/", paymentController.payment_create);
router.get("/", paymentController.payment_all);
router.get("/:paymentId", paymentController.payment_details);
router.put("/:paymentId", paymentController.payment_update);
router.delete("/:paymentId", paymentController.payment_delete);

module.exports = router;
