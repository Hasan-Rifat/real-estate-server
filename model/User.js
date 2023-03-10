const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: [true, "first Name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    require: [true, "last Name is required"],
    trim: true,
  },
  email: {
    type: String,
    require: [true, "email is required"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: [true, "password is required"],
  },
  accountType: {
    type: String,
    require: [true, "accountType is require"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
