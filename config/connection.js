const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "bshqvmjmuipphzzp14gz",
  "ruruqycihtc2ai6du",
  "7DXq4R012vadTZL32DAc",
  {
    dialect: "mysql",
    host: "bshqvmjmuipphzzp14gz-mysql.services.clever-cloud.com",
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("conexion realizada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sequelize, connectDB };
