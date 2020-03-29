"use strict";
const mongoose = require("mongoose");
const winston = require("winston");
const config = require("config");
module.exports = async function() {
  mongoose.set("useFindAndModify", false);
  //mongoose.set("useUnifiedTopology", true);
  //const db = config.get("db");
  const uri =
    "mongodb+srv://theosadxen:nahar2011@cluster0-a5rdm.mongodb.net/test?retryWrites=true&w=majority";
  await mongoose
    .connect(uri, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    })
    .then(() => winston.info(`Connected to ${db}...`));
};
