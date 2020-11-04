const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

//register a new user
router.post("/newuser", (req, res) => {
  var newUser = new User();
  newUser.userId = req.body.userId;
  newUser.password = req.body.password;
  newUser.uId = uuidv4();
  newUser.email = req.body.email;
  newUser.phoneNo = req.body.phoneNo;

  // newUser(req.body)

  newUser
    .save()
    .then((d) => {
      res.sendStatus(200);
      console.log(d);
    })
    .catch((err) => console.log(err));
});

//login
router.post("/login", (req, res) => {
  User.findOne({ userId: req.body.userId, password: req.body.password })
    .then((d) => {
      if (!d) {
        res.send("incorrect password");
      }
      res.send(d);
      console.log("logged in successfully");
    })
    .catch((err) => {
      console.log("No user found");
    });
});

module.exports = router;
