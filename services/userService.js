const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.getUserService = async (email, password) => {
  const data = await User.where({ email });
  const isMatch = bcrypt.compareSync(password, data[0].password);

  if (!isMatch) throw new Error("credential is not matched");

  const token = jwt.sign(email, process.env.JWT);
  return { data, token };
};

exports.createUserService = async (data) => {
  let { firstName, lastName, email, password, accountType } = data;

  password = await bcrypt.hash(password, 10);

  const token = jwt.sign(email, process.env.JWT);

  const result = await User.create({
    firstName,
    lastName,
    email,
    password,
    accountType,
  });

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
