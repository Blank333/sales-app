const Users = require("../models/users.model");
const bcrypt = require("bcrypt");

//Get all users
exports.getAll = (req, res) => {
  Users.find()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      return res.status(500).send(`Server Error ${err}`);
    });
};

//Register a new user
exports.register = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) return res.status(400).send("Please provide all fields.");

  //Hash the password with 10 rounds of salt
  bcrypt.hash(password, 10).then((hashedPassword) => {
    //Check if email already exists in database
    Users.findOne({ email })
      .then((user) => {
        if (user) return res.status(400).send("User with email already exists!");

        const newUser = new Users({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });

        newUser
          .save()
          .then((data) => {
            if (!data) return res.status(400).send("Something went wrong");
            return res.status(200).send("User registered successfully!");
          })
          .catch((err) => {
            return res.status(500).send(`Server Error ${err}`);
          });
      })
      .catch((err) => {
        return res.status(500).send(`Server Error ${err}`);
      });
  });
};

//Logging in a user
exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send("Please provide all fields.");
  Users.findOne({ email })
    .then((user) => {
      if (!user) return res.status(401).send("Invalid credentials");

      bcrypt
        .compare(password, user.password)
        .then((compare) => {
          if (!compare) return res.status(401).send("Invalid credentials");
          return res.status(200).send("Logged in successfully!");
        })
        .catch((err) => {
          return res.status(500).send(`Server Error ${err}`);
        });
    })
    .catch((err) => {
      return res.status(500).send(`Server Error ${err}`);
    });
};
