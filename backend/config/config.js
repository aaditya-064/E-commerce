import dotenv from "dotenv";
dotenv.config();

const data = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
};

export default data;
