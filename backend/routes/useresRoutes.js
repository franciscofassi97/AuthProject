const express = require("express");
const router = express.Router();

const { getAllUsers, getUserById } = require("../controller/usersController");

router.get("/list", getAllUsers);

router.get("/:idUser", getUserById);

module.exports = router;
