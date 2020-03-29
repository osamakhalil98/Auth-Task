const mongoose = require("mongoose");
const winston = require("winston");
module.exports = function() {
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose
    .connect("mongodb://localhost/auth", { useNewUrlParser: true })
    .then(winston.info("connected to mongodb.."));
};
