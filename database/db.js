const mongoose = require("mongoose");
const winston = require("winston");
const config = require("config");
module.exports = async function() {
  mongoose.set("useFindAndModify", false);
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
  //const db = config.get("db");
  const uri =
    "mongodb+srv://theosadxen:nahar2011@cluster0-a5rdm.mongodb.net/test?retryWrites=true&w=majority";
  await mongoose.connect(uri).then(() => winston.info(`Connected to ${db}...`));
};
