import config from "./config.js";
import mongoose from "mongoose";

const db = mongoose.connect(config.DB_URL);

export default db;
