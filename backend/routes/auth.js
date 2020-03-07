const express = require("express");
const Router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.jwtSecret;

let User = require("../models/userslist.model");

// Router.route("/").get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json("Error: " + err));
// });

Router.route("/").post((req, res, err) => {
  const { email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User Does not Exist" });

    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

      jwt.sign(
        {
          id: user.id
          // first_name: user.first_name,
          // last_name: user.last_name
        },
        process.env.jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              // last_name: user.first_name,
              // last_name: user.last_name,
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

module.exports = Router;
