const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.ATLAS_URI, () => {
    console.log("Connected to MongoDB");
  });
};

module.exports = dbConnect;
