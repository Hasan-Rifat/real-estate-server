const mongoose = require("mongoose");
const userLoginSchema = require("./userLoginSchema");

const UserLoginModel = mongoose.model("UserLoginModel", userLoginSchema);

module.exports = UserLoginModel;
