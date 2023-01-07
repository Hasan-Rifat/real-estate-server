const RegisterUserModel = require("../model/Register/RegisterUserModel");
const { getDb } = require("../utils/db.Connect");

module.exports.getUser = async (req, res) => {
  /* const db = getDb();
  const result = await db.collection("user").find({}).toArray(); */
  try {
    const result = RegisterUserModel.create(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
module.exports.createUser = async (req, res) => {
  const data = req.body;
  console.log(data);
  // const result = await db.collection("users").insertOne(data);
  res.send("result");
};
