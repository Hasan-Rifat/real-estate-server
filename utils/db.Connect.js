const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true });
};

module.exports = dbConnect;
