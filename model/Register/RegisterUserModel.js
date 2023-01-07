const mongoose = require("mongoose");
const registerUserSchema = require("./registerUserSchema");

const RegisterUserModel = mongoose.Model(
  "RegisterUserModel",
  registerUserSchema
);

module.exports = RegisterUserModel;
