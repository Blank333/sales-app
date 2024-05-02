const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => {
          //Simple regular expression for validating email
          return /\S+@\w+\.\w+(\.\w+)?/.test(value);
        },
        message: "Please provide a valid email address",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;
