const services = require("../services/userService");

module.exports.getUser = async (req, res) => {
  try {
    const result = await services.getUserService();
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "technical error",
      error: error.message,
    });
  }
};

module.exports.createUser = async (req, res) => {
  try {
    const result = await services.createUserService(req.body);
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
