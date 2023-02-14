const express = require("express");
const user = require("../../controllers/user.controller");
const router = express.Router();

router.route("/login").post(user.getUser);
router.route("/register").post(user.createUser);
router.route("/:email").patch(user.updateUser).delete(user.deleteUser);
module.exports = router;
