const RegisterUser = require("../model/RegisterUser");

exports.getUserService = async () => {
  const data = await RegisterUser.where({});
  return data;
};

exports.createUserService = async (data) => {
  const result = await RegisterUser.create(data);
  return result;
};

exports.updateUserService = async (userEmail, userData) => {
  const data = await RegisterUser.updateOne(
    { email: userEmail },
    { $set: userData },
    { runValidators: true }
  );
  return data;
};
exports.deleteUserService = async (userEmail) => {
  const data = await RegisterUser.deleteOne({ email: userEmail });
  return data;
};
