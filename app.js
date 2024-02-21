const { config } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

//import routes
const postRoute = require("./routes/posts");
const firstComponentRoute = require("./routes/firstComponent")

app.use("/posts", postRoute);
app.use("/firstComponent", firstComponentRoute);

// Routes creation
app.get("/", (req, res) => {
  res.send("We are on home page");
});

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(5000);
