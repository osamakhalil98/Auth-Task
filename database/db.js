const mongoose = require("mongoose");
module.exports = function() {
  mongoose.set("useFindAndModify", false);
  const db =
    "mongodb+srv://theosadxen:newPassword@cluster0-a5rdm.mongodb.net/auth";
  mongoose
    .connect(db, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    })
    .then(() => console.log(`Connected to mongodb...`));
};
