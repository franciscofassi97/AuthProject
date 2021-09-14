const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../controller/usersController");

router.get("/list", getAllUsers);

module.exports = router;
