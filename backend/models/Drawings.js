const moongose = require("mongoose");

const drawingsSchema = moongose.Schema(
  {
    titleDrawing: {
      type: String,
      //   required: [true, "The field title cannot be empty"],
    },
    descriptionDrawing: {
      type: String,
    },
    uidUser: {
      type: String,
    },
    imagenUrlDrawing: {
      type: String,
      //   required: [true, "The field Imagen cannot be empty"],
    },
    cloudinaryIdDrawing: {
      type: String,
      //   required: true,
    },
    votesDrawing: {
      type: Number,
    },
  },
  { timestamps: true }
);
const Drawings = moongose.model("drawings", drawingsSchema);
module.exports = Drawings;
