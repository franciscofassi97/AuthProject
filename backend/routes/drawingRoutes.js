const express = require("express");
const router = express.Router();

const upload = require("../utils/multer");

const { uploadDrawings } = require("../controller/drawingController");

router.post("/upload", upload.single("imagenUrlDrawing"), uploadDrawings);

module.exports = router;
