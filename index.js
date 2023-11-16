const express = require("express");
const cors = require("cors");
const port = "3000";
const { sequelize, connectDB } = require("./config/connection");
const userRoute = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRoute);
app.get("/", (req, res) => {
  res.json("servidor levantado");
});

app.listen(port, async () => {
  console.log(`servidor corriendo por el puerto ${port}`);
  await connectDB();
});
