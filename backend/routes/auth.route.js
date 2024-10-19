import express from "express";
import {
  registerUser,
  logUser,
  forgotPasswordController,
} from "../controller/auth.controller.js";
import {
  requireSignIn,
  verifyLogin,
  verifyRegister,
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", verifyRegister, registerUser);
router.post("/login", verifyLogin, logUser);

//forgot password
router.post("/forgot-password", forgotPasswordController);

//protected route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
