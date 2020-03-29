const express = require("express");
const bcrypt = require("bcrypt");
const authToken = require("../middlewares/authtoken");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User, authUser } = require("../models/user");
router.post("/", async (req, res, next) => {
  try {
    //validating the request
    let { error } = authUser(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    }
    //querying the DB to find if the user exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(400).send("This user already exists");
    }
    //creating a new user
    user = new User();
    user.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;
    // hashing the user password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user = await user.save();
    //using lodash to create new user object excluding the password from being sent to the client
    const token = user.getUserToken();
    res
      .header("x-register-token", token)
      .send(_.pick(user, ["_id", "name", "email"]));
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
