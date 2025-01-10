const mongodb = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;
const db = mongodb
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to mongoDB Atlassssssss");
  })
  .catch((err) => {
    console.log("Can not connect", err);
  });
module.exports = db;
