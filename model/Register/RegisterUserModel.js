const mongoose = require("mongoose");
const registerUserSchema = require("./registerUserSchema");

const RegisterUserModel = mongoose.model("RegisterUser", registerUserSchema);

module.exports = RegisterUserModel;
