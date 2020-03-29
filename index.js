const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.set("useFindAndModify", false);
const uri =
  "mongodb+srv://theosadxen:newPassword@cluster0-a5rdm.mongodb.net/auth";
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to mongodb..."));
require("./startups/routes")(app);
//require("./startups/win-logs");
require("./startups/config")();
require("./startups/prod")(app);
app.use(morgan("tiny"));
app.use(cors());
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Listening on port ${port}`);
