const RegisterUser = require("../model/RegisterUser");

exports.getUserService = async () => {
  const data = await RegisterUser.find({});
  return data;
};

exports.createUserService = async (data) => {
  const result = await RegisterUser.create(data);
  return result;
};
