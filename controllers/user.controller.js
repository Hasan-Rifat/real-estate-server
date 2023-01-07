const { getDb } = require("../utils/db.Connect");

module.exports.getUser = async (req, res) => {
  /* const db = getDb();
  const result = await db.collection("user").find({}).toArray(); */
  res.send("result");
};
module.exports.createUser = async (req, res) => {
  const data = req.body;
  console.log(data);
  // const result = await db.collection("users").insertOne(data);
  res.send("result");
};
