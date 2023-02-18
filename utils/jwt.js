require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.verifyJwt = (token) => {
  jwt.verify(process.env.JWT, "wrong-secret", function (err, decoded) {
    // err
    // decoded undefined
  });
};
