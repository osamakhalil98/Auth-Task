const express = require("express");
const router = express.Router();
const authToken = require("../middlewares/authtoken");
const { User } = require("../models/user");
router.get("/", authToken, async (req, res, next) => {
  //getting the current user after validating the token then send user to the client
  try {
    const user = await User.findById(req.user._id).select({ password: -1 });
    res.send(user);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
