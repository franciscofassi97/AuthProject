const Drawings = require("../models/Drawings");
const cloudinary = require("../utils/cloudinary");
const mongoose = require("mongoose");

exports.uploadDrawings = async (req, res) => {
  const { titleDrawing, descriptionDrawing, uidUser, votesDrawing } = req.body;

  try {
    const resultCloudinary = await cloudinary.uploader.upload(req.file.path, {
      folder: "AuthProject",
    });

    const drawing = new Drawings({
      titleDrawing,
      descriptionDrawing,
      uidUser,
      votesDrawing,
      imagenUrlDrawing: resultCloudinary.secure_url,
      cloudinaryIdDrawing: resultCloudinary.public_id,
    });

    const newDrawing = await drawing.save();

    res.json({
      message: "Your drawing was successfully uploaded",
    });
  } catch (error) {
    return res.status(400).json({
      error: "It was not possible to upload your drawing at the moment",
      message: `The error is: ${error}`,
    });
  }
};

exports.getDrawingsByIdUser = async (req, res) => {
  const idUser = req.params.idUser;
  try {
    const drawings = await Drawings.find({ uidUser: idUser });
    res.json(drawings);
  } catch (error) {
    return res.status(400).json({
      error: "No drawings found",
      message: `The error is: ${error}`,
    });
  }
};

exports.getDrawingById = async (req, res) => {
  const idDrawing = mongoose.Types.ObjectId(req.params.idDrawing);

  try {
    const drawing = await Drawings.findById(idDrawing);
    return res.status(200).send(drawing);
  } catch (error) {
    return res.status(400).json({
      error: "No drawing found",
      message: `The error is: ${error}`,
    });
  }
};
