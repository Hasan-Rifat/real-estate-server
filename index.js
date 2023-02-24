const express = require("express");
const cors = require("cors");
require("dotenv").config();
const property = require("./routers/v1/property.router");
const user = require("./routers/v1/user.router");
const dbConnect = require("./utils/db.Connect");

// payment
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
// verifyJwt();

// mongodb connect using mongoose
dbConnect();

// all routes
// property api
app.use("/api/v1/property", property);

// user api
app.use("/api/v1/user", user);
// home router
app.get("/", (req, res) => {
  res.send("hello world...");
});

// 404 route
app.all("*", (req, res) => {
  res.send("not found");
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
