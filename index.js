const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db");
app.use(express.json()); // Middleware to parse JSON request bodies
const router = require("./Routes/todoRoutes");
// db;
app.get("/", (req, res) => {
  res.status(200).json("Ok Home PAge");
});
app.use("/api", router);
app.listen(PORT, console.log("Server is live on ", PORT));
