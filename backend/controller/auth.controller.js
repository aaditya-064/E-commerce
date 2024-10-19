import { hashPassword, comparePassword } from "../helpers/auth.helpers.js";
import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const registerUser = async (req, res) => {
  try {
    const { password } = req.body;

    //checking if the user already exist
    const findUser = await userModel.findOne({ email: req.body.email });
    if (findUser) {
      const err = new Error("User already exists");
      err.statusCode = 400;
      throw err;
    }

    const hashedPassword = await hashPassword(password);

    //save
    const user = await userModel.create({
      ...req.body,
      password: hashedPassword,
    });

    res.status(201).send({
      success: true,
      message: "Registered Successfully",
      user,
    });
  } catch (err) {
    res.status(err?.statusCode || 500).json({ message: err?.message });
  }
};

export const logUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      const err = new Error("User doesn't exist. Please Register");
      err.statusCode = 404;
      throw err;
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      const err = new Error("Incorrect Password");
      err.statusCode = 404;
      throw err;
    }

    const token = jwt.sign({ _id: user._id }, config.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.send({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (err) {
    res
      .status(err?.statusCode || 500)
      .send({ success: false, message: err?.message });
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body;
    if (!email || !answer || !newPassword) {
      const err = new Error("Please enter all the details");
      res.statusCode = 400;
      throw err;
    }

    //check
    const user = await userModel.findOne({
      email: req.body.email,
      answer: req.body.answer,
    });
    //validation
    if (!user) {
      const err = new Error("User not found");
      res.statusCode = 404;
      throw err;
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findOneAndUpdate(
      { _id: user._id },
      { $set: { ...req.body, password: hashed } }
    );
    res
      .status(200)
      .send({ success: true, message: "Password reset successfully" });
  } catch (err) {
    res.status(err?.statusCode || 500).send({
      message: err?.message,
      success: false,
    });
  }
};
