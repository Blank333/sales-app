const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../DBconfig");
const Users = require("../models/users.model");

//Authenticate the user with the jwt token
exports.verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: "Please login to use the application." });
  const token = authorization.replace("bearer ", "");

  jwt.verify(token, JWT_SECRET, (err, data) => {
    if (err) return res.status(401).json({ error: "Please login to use the application." });
    const { _id } = data;

    //Not selecting the password field
    Users.findById(_id, { password: 0 })
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        return res.status(500).json({ error: `Server Error ${err}` });
      });
  });
};
