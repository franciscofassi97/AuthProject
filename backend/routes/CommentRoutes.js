const express = require("express");
const router = express.Router();

const {
  createComment,
  getCommetByIdDrawing,
} = require("../controller/commentsController");
const { checkIfAuthenticated } = require("../middleware/auth");

router.post("/create", checkIfAuthenticated, createComment);

router.get("/:idDrawing", getCommetByIdDrawing);

module.exports = router;
