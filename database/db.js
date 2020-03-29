"use strict";
const mongoose = require("mongoose");
const winston = require("winston");
const config = require("config");
module.exports = async function() {
  mongoose.set("useFindAndModify", false);
  //mongoose.set("useUnifiedTopology", true);
  //const db = config.get("db");
  //"mongodb://localhost/auth"
  const uri =
    "mongodb+srv://theosadxen:newPassword@cluster0-a5rdm.mongodb.net/test?retryWrites=true&w=majority/auth";
  await mongoose
    .connect(uri, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    })
    .then(() => winston.info(`Connected to mongodb...`));
};
