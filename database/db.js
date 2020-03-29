"use strict";
const mongoose = require("mongoose");
const winston = require("winston");
const config = require("config");
module.exports = async function() {
  mongoose.set("useFindAndModify", false);
  const uri =
    "mongodb+srv://theosadxen:newPassword@cluster0-a5rdm.mongodb.net/auth";
  await mongoose
    .connect(uri, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    })
    .then(() => console.log("Connected to mongodb..."));
};
