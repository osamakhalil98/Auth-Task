const mongoose = require("mongoose");
const winston = require("winston");
module.exports = function() {
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose
    .connect("mongodb://localhost/auth", { useNewUrlParser: true })
    .then(winston.info("connected to mongodb.."));
};
