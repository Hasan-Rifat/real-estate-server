const express = require("express");
const cors = require("cors");
const { connectToServer } = require("./utils/db.connect");
const user = require("./routers/v1/user.router");
const mongoose = require("mongoose");

// payment
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb connect using mongoose
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() =>
    app.listen(port, () => console.log(`Example app listening on port ${port}`))
  );

// all routes
app.use("/api/v1/user", user);

app.get("/", (req, res) => {
  res.send("hello world...");
});

// 404 route
app.all("*", (req, res) => {
  res.send("not found");
});
