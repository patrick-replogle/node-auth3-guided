const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        //the token is not valid
        res.status(401).json({ message: "invalid token" });
      } else {
        req.user = decodedToken.user;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "shall not pass!" });
  }
};
