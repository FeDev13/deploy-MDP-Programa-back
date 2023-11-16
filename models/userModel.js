const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

const User = sequelize.define("usuario", {
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

sequelize.sync();
module.exports = User;
