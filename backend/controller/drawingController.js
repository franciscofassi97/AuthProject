const Drawings = require("../models/Drawings");
const cloudinary = require("../utils/cloudinary");

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
