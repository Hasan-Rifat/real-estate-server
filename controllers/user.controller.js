const RegisterUser = require("../model/RegisterUser");
const services = require("../services/userService");

exports.getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await services.getUserService(email, password);

    if (result.length === 0) {
      return res.status(400).json({
        status: "fail",
        message: "User not found",
      });
    }

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

exports.createUser = async (req, res) => {
  try {
    const userExist = await RegisterUser.where({ email: req.body.email });
    if (userExist) {
      console.log(userExist);
    }

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

exports.updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await services.updateUserService(email, req.body);
    res.status(200).json({
      status: "success",
      message: "Data is updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not Updated",
      error: error.message,
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await services.deleteUserService(email);
    res.status(200).json({
      status: "success",
      message: "success Data is deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not deleted",
      error: error.message,
    });
  }
};
