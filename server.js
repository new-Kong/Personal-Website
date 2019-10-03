//jshint esversion:6
const express = require("express");
const compression = require("compression");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(compression());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Success on port");
});
