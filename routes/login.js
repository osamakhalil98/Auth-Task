const express = require("express");
const mongoose = require("mongoose");
const winston = require("winston");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const joi = require("joi");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User } = require("../models/user");

router.post("/", async (req, res, next) => {
  try {
    //validating the request
    let { error } = loginUser(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    }
    //querying the DB to find if the user exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).send("Invalid email or password");
    }
    //comparing the passwords(salt)
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword) {
      res.status(400).send("Invalid email or password");
    }
    //using jwt to give every logged-in user a token
    const token = user.getUserToken();
    res.send(token);
  } catch (ex) {
    next(ex);
  }
});
function loginUser(user) {
  const schema = {
    password: joi
      .string()
      .required(true)
      .max(1024)
      .min(8),
    email: joi
      .string()
      .required(true)
      .max(256)
      .min(8)
      .email()
  };
  return joi.validate(user, schema);
}

module.exports = router;
