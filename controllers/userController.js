const User = require("../models/userModel");

//metodo GET

const getUsers = async (req, res) => {
  const user = await User.findAll();
  return res.status(200).json(user);
};

module.exports = getUsers;
