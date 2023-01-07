const RegisterUserModel = require("../model/Register/RegisterUserModel");

module.exports.getUser = async (req, res) => {
  /* const db = getDb();
  const result = await db.collection("user").find({}).toArray(); */
};
module.exports.createUser = async (req, res) => {
  try {
    const result = await RegisterUserModel.create(req.body);
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
