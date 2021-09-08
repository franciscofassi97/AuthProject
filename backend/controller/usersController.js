const Users = require("../models/Users");
const admin = require("../config/firebaseAdmin");

exports.signUpUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    let user = await Users.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(500)
        .json({ error: "Email is invalid or already taken" });
    }

    user = new Users({
      firstName,
      lastName,
      email,
    });
    const newUser = await user.save();

    user = await admin.auth().createUser({
      email,
      password,
      displayName: `${firstName} ${lastName}`,
    });
    return res.send(user);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.singInUser = async (req, res) => {
  const { email, displayName, photoURL } = req.body;

  try {
    let user = await Users.findOne({ email: req.body.email });

    if (user) {
      //El correo ya exite... return null?
      return res.send(user);
    }
    const displayNameArray = displayName.split(" ");
    const firstName = displayNameArray[0];
    const lastName = displayNameArray[1];

    user = new Users({
      firstName,
      lastName,
      email,
      photoURL,
    });
    const newUser = await user.save();

    return res.send(newUser);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
