const express = require("express");

const routes = express.Router();
//connected to MongoDB
require("../connects/mongoose");
//schema user
const Users = require("../models/usersDto");
//parser
const { json, body } = require("../parser/parsers");

routes.get("/user", (req, res) => {
  res.send("On users page");
});

routes.get("/user/view", (req, res) => {
  res.json({
    name: "zam",
    fullName: "zammon",
    age: 23,
    birtdate: "12-09-2000",
  });
});

routes.post("/user/create", body, async (req, res) => {
  const {
    firstname,
    lastname,
    birthdate,
    email,
    password,
    createAt,
    updateAt,
  } = req.body;
  console.log(req.body);

  if (!req.body) {
    res.status(401).json({
      message: "value in body is not null",
      status: 401,
    });
    return;
  }

  const user = await Users.create({
    f_name: firstname,
    l_name: lastname,
    b_date: birthdate,
    email: email,
    password: password,
    created_at: createAt,
    updated_at: updateAt,
  });

  await user
    .save()
    .then((status) => {
      console.log("status save on database");
      res.status(200).json({
        message: "created new user!",
      });
    })
    .catch((err) => console.log(err));
});

module.exports = routes;
