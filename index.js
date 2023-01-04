const express = require("express");
const cors = require("cors");
const { connectToServer } = require("./utils/db.connect");

// payment
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb
connectToServer((error) => {
  if (!error) {
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}`)
    );
  } else {
    console.log(error);
  }
});

// all routes
app.get("/", (req, res) => {
  res.send("hello world...");
});

app.all("*", (req, res) => {
  res.send("not found");
});
