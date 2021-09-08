const Comments = require("../models/Comments");

exports.createComment = async (req, res) => {
  const { titleComments, descriptionsComments, uidUser } = req.body;

  const comment = new Comments({
    titleComments,
    descriptionsComments,
    uidUser,
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
