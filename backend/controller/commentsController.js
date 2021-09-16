const Comments = require("../models/Comments");

exports.createComment = async (req, res) => {
  const { titleComments, descriptionsComments, uidUser, idDrawing } = req.body;

  const comment = new Comments({
    titleComments,
    descriptionsComments,
    uidUser,
    idDrawing,
  });
  try {
    const newComment = await comment.save();
    res.json({ message: "Comment was created successfully", data: newComment });
  } catch (error) {
    return res.status(400).json({
      error: "Some error had at the server",
      message: error,
    });
  }
};

exports.getCommetByIdDrawing = async (req, res) => {
  const idDrawing = req.params.idDrawing;

  try {
    const commets = await Comments.find({ idDrawing: idDrawing });
    res.json(commets);
  } catch (error) {
    return res.status(400).json({
      error: `No comments found ${error}`,
      message: `The error is: ${error}`,
    });
  }
};
