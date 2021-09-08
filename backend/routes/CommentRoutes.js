const express = require("express");
const router = express.Router();

const { createComment } = require("../controller/commentsController");
const { checkIfAuthenticated } = require("../middleware/auth");

router.post("/create/comment", checkIfAuthenticated, createComment);

module.exports = router;
