const userController = require("../controllers/userController");
const router = require("express").Router();

router.get("/users", userController);

module.exports = router;
