const express = require("express");
const router = express.Router();

const { createComment } = require("../controller/commentsController");
const { checkIfAuthenticated } = require("../middleware/auth");

router.post("/create", checkIfAuthenticated, createComment);

module.exports = router;
