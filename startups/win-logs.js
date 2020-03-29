const winston = require("winston");
require("winston-mongodb");
module.exports = function() {
  winston.add(winston.transports.File, { filename: "logfile.log" });
  process.on("unhandledRejection", ex => {
    winston.error(ex.message, ex);
    process.exit(1);
  });
};
