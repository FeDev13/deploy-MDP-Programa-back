const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("usuarios", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("conexion realizada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sequelize, connectDB };
