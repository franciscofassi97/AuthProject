const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const commentsSchema = mongoose.Schema(
  {
    titleComments: {
      type: String,
      required: [true, "The Title field cannot be empty"],
    },
    descriptionsComments: {
      type: String,
      required: [true, "The Description field cannot be empty"],
    },
    uidUser: {
      type: String,
      required: true,
    },
    idDrawing: {
      type: ObjectId,
      ref: "drawings",
      required: true,
    },
  },
  { timestamps: true }
);

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
