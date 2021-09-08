const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "The Name field cannot be empty"],
    },
    lastName: {
      type: String,
      required: [true, "The Name field cannot be empty"],
    },
    email: {
      type: String,
      required: [true, "The e-mail field cannot be empty."],
      unique: [true, "Email already exists account"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "You must enter a valid email",
      ],
    },
    role: {
      type: Array,
      default: "user",
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
