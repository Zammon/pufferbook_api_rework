const express = require("express");
const routes = express.Router();

routes.get("/profile", (req, res) => {
  res.send("On users page");
});

module.exports = routes;
