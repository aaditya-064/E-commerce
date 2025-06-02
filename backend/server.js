import express from "express";
import config from "./config/config.js";
import db from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";

//rest objects
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

db.then(() => {
  console.log("DATABASE CONNECTED");
}).catch((err) => {
  console.log(err);
});

app.listen(
  config.PORT,
  console.log(`SERVER IS RUNNING AT PORT ${config.PORT}`)
);
