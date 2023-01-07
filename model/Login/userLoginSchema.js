const mongoose = require("mongoose");

const userLoginSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Please provide your email"],
      trim: true,
    },
    password: {
      type: String,
      require: [true, "Please provide a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = userLoginSchema;
