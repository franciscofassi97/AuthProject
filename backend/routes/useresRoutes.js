const express = require("express");
const router = express.Router();

const { signUpUser, singInUser } = require("../controller/usersController");

router.post("/auth/singin", singInUser);

router.post("/auth/signup", signUpUser);

module.exports = router;
