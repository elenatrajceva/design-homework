const router = require("express").Router();
const { signin, signup } = require("../controllers/auth_controller");

router.post("/auth/signin", signin);
router.post("/auth/signup", signup);

module.exports = router;
