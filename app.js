const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(cors());


//routes

app.get("/", (req, res) => {
  res.send("Route is working!");
});



module.exports = app;




