const jwt = require("jsonwebtoken");

module.exports = function authToken(req, res, next) {
  const token = req.header("x-register-token");
  if (!token) {
    return res.status(401).send("No valid Token sent");
  }
  try {
    const decoded = jwt.verify(token);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid Token");
  }
};
