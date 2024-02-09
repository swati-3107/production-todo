const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const path = require("path");

mongoose.connect(process.env.MONGO_URL);
const app = express();
app.use(express.json());
app.use(cors());
// middleware
app.use(express.static(path.join(__dirname, "dist")));

app.use("/api/admin", require("./routes/todoRoute"));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

mongoose.connection.once("open", () => {
  console.log("MONGO CONNECTED");
  app.listen(5000, console.log("server running"));
});
