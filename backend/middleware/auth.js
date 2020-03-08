const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    res.status(401).json({ msg: "No Token, Authorization Denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);

    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is Invalid" });
  }
}

module.exports = auth;
