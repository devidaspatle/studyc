const router = require("express").Router();
const loginController = require('../controllers/loginController');

router.post("/", loginController.user_login);
router.post("/signout", loginController.signout);


module.exports = router;
