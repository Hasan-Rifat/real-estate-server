const User = require("../model/User");
const jwt = require("jsonwebtoken");

exports.getUserService = async (email, password) => {
  const data = await User.where({ email, password });
  const token = jwt.sign(email, process.env.JWT);
  return { data, token };
};

exports.createUserService = async (data) => {
  const result = await User.create(data);
  const token = jwt.sign(data.email, process.env.JWT);
  return { result, token };
};

exports.updateUserService = async (userEmail, userData) => {
  const data = await User.updateOne(
    { email: userEmail },
    { $set: userData },
    { runValidators: true }
  );
  return data;
};
exports.deleteUserService = async (userEmail) => {
  const data = await User.deleteOne({ email: userEmail });
  return data;
};
