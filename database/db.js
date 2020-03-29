const mongoose = require("mongoose");
const winston = require("winston");
const config = require("config");
module.exports = function() {
  mongoose.set("useFindAndModify", false);
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
  const db = config.get("db");
  mongoose.connect(db).then(() => winston.info(`Connected to ${db}...`));
};
