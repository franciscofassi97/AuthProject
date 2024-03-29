const Users = require("../models/Users");
const admin = require("../config/firebaseAdmin");

exports.getAllUsers = async (req, res) => {
  var usersList = [];
  try {
    const listUsers = await admin.auth().listUsers();

    if (listUsers) {
      for (let i = 0; i < listUsers.users.length; i++) {
        usersList.push({
          uid: listUsers.users[i].uid,
          email: listUsers.users[i].email,
          displayName: listUsers.users[i].displayName,
          photoURL: listUsers.users[i].photoURL,
        });
      }
    }

    return res.status(200).send(usersList);
  } catch (err) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  const idUser = req.params.idUser;
  var user = {};
  try {
    const { email, displayName } = await admin.auth().getUser(idUser);

    user = {
      email,
      displayName,
    };
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
