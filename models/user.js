const mongoose = require("mongoose");
const winston = require("winston");
const jwt = require("jsonwebtoken");
const config = require("config");
const joi = require("joi");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 8,
    maxlength: 256,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024
  },
  email: {
    type: String,
    minlength: 8,
    maxlength: 256,
    unique: true,
    required: true
  }
});
userSchema.methods.getUserToken = function() {
  const token = jwt.sign({ _id: this._id }, config.get("jwtprivateKey"));
  return token;
};
const User = mongoose.model("User", userSchema);

function authUser(user) {
  const schema = {
    name: joi
      .string()
      .required(true)
      .max(256)
      .min(8),
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
module.exports.User = User;
module.exports.authUser = authUser;
