const express = require("express");
const router = express.Router();

const upload = require("../utils/multer");
const { checkIfAuthenticated } = require("../middleware/auth");
const {
  uploadDrawings,
  getDrawingsByIdUser,
  getDrawingById,
} = require("../controller/drawingController");

router.post("/upload", upload.single("imagenUrlDrawing"), uploadDrawings);

router.get("/list/:idUser", checkIfAuthenticated, getDrawingsByIdUser);

router.get("/:idDrawing", checkIfAuthenticated, getDrawingById);

module.exports = router;
