const config = require("config");
const winston = require("winston");
module.exports = function() {
  if (!config.get("jwt-privateKey")) {
    throw new Error("ERROR:JWT PRIVATE KEY IS NOT DEFINED");
  }
};
