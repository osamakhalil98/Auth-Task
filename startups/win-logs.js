const winston = require("winston");
require("winston-mongodb");
module.exports = function() {
  winston.add(winston.transports.File, { filename: "logfile.log" });
  winston.add(winston.transports.MongoDB, {
    db: "mongodb://localhost/auth",
    level: "info"
  });
  process.on("uncaughtException", ex => {
    winston.error(ex.message, ex);
    process.exit(1);
  });
  process.on("unhandledRejection", ex => {
    winston.error(ex.message, ex);
    process.exit(1);
  });
};
