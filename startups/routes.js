const users = require("../routes/signup");
const express = require("express");
const login = require("../routes/login");
const user = require("../routes/user");
const error = require("../middlewares/error");
module.exports = function(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use("/api/signup", users);
  app.use("/api/login", login);
  app.use("/api/me", user);
  app.use(error);
};
