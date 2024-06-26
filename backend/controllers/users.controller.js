const Users = require("../models/users.model");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../DBconfig");
const jwt = require("jsonwebtoken");

//Get all users
exports.getAll = (req, res) => {
  Users.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      return res.status(500).json({ error: `Server Error ${err}` });
    });
};

//Register a new user
exports.register = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password)
    return res.status(400).json({ error: "Please provide all fields." });
  if (!/\S+@\w+\.\w+(\.\w+)?/.test(email)) return res.status(400).json({ error: "Invalid email" });

  //Hash the password with 10 rounds of salt
  bcrypt.hash(password, 10).then((hashedPassword) => {
    //Check if email already exists in database
    Users.findOne({ email })
      .then((user) => {
        if (user) return res.status(400).json({ error: "User with email already exists!" });

        const newUser = new Users({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });

        newUser
          .save()
          .then((data) => {
            if (!data) return res.status(400).json({ error: "Something went wrong" });
            return res.status(200).json({ message: "Registered successfully!" });
          })
          .catch((err) => {
            return res.status(500).json({ error: `Server Error ${err}` });
          });
      })
      .catch((err) => {
        return res.status(500).json({ error: `Server Error ${err}` });
      });
  });
};

//Logging in a user
exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Please provide all fields." });
  Users.findOne({ email })
    .then((user) => {
      if (!user) return res.status(401).json({ error: "Invalid credentials" });

      bcrypt
        .compare(password, user.password)
        .then((compare) => {
          if (!compare) return res.status(401).json({ error: "Invalid credentials" });
          const jwtToken = jwt.sign({ _id: user._id }, JWT_SECRET);
          return res.status(200).json({ message: "Logged in successfully!", token: jwtToken });
        })
        .catch((err) => {
          return res.status(500).json({ error: `Server Error ${err}` });
        });
    })
    .catch((err) => {
      return res.status(500).json({ error: `Server Error ${err}` });
    });
};
