const express = require("express");
const Router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.jwtSecret;

let User = require("../models/userslist.model");

Router.route("/add").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

Router.route("/add").post((req, res, err) => {
  const { email, password, first_name, last_name } = req.body;

  if (!email || !password || !first_name || !last_name)
    return res.status(400).json({ msg: "Please fill all the fields" });

  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User Already exists" });
  });

  const newUser = new User({
    first_name,
    last_name,
    email,
    password
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then(user => {
        jwt.sign(
          {
            id: user.id
            // first_name: user.first_name,
            // last_name: user.last_name
          },
          process.env.jwtSecret,
          // { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                last_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                id: user._id
              }
            });
          }
        );
      });
    });
  });

  //   newUser
  //     .save()
  //     .then(() => res.json("User Added"))
  //     .catch(() => res.status(400).json("Error: " + err));
});

module.exports = Router;
