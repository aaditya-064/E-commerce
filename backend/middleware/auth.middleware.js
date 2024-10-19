import userModel from "../model/userModel.js";
import JWT from "jsonwebtoken";
import config from "../config/config.js";

export const verifyLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      const err = new Error("Email is required");
      err.statusCode = 404;
      throw err;
    }
    if (!password) {
      const err = new Error("Password is required");
      err.statusCode = 404;
      throw err;
    }
    next();
  } catch (err) {
    res
      .status(err?.statusCode || 500)
      .send({ success: false, message: err?.message });
  }
};

export const verifyRegister = async (req, res, next) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name) {
      const err = new Error("Name is required");
      err.statusCode = 404;
      throw err;
    }
    if (!email) {
      const err = new Error("Email is required");
      err.statusCode = 404;
      throw err;
    }
    if (!password) {
      const err = new Error("Password is required");
      err.statusCode = 404;
      throw err;
    }
    if (!phone) {
      const err = new Error("Phone is required");
      err.statusCode = 404;
      throw err;
    }
    if (!address) {
      const err = new Error("Address is required");
      err.statusCode = 404;
      throw err;
    }
    next();
  } catch (err) {
    res
      .status(err?.statusCode || 500)
      .send({ success: false, message: err?.message });
  }
};

export const requireSignIn = async (req, res, next) => {
  try {
    JWT.verify(req.headers.authorization, config.JWT_SECRET);
    next();
  } catch (err) {
    console.log(err);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      const err = new Error("Unauthorized Access");
      res.statusCode = 500;
      throw err;
    } else {
      next();
    }
  } catch (err) {
    res
      .status(err?.statusCode || 500)
      .json({ success: false, message: err?.message });
  }
};
