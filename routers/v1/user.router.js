const express = require("express");
const user = require("../../controllers/user.controller");
const router = express.Router();

router.route("/login").get(user.getUser);
router.route("/register").post(user.createUser);
module.exports = router;
