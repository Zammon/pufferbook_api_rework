require("dotenv").config();
const express = require("express");
const app = express();

var bodyParser = require("body-parser");

const port = process.env.PORT_DEV || 3000;

const profile_routed = require("./src/routers/profile");
const users_routed = require("./src/routers/users");

app.use(users_routed);

app.listen(port, (req, res) => {
  console.log("server is running on port:", port);
});
