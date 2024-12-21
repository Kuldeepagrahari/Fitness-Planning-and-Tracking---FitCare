import express from "express";
import passport from "passport";
import {
  requestOtp,
  verifyOtp,
  googleAuthCallback,
} from "../controllers/authController.js";

const router = express.Router();

// OTP Authentication
router.post("/request-otp", requestOtp);
router.post("/verify-otp", verifyOtp);

// Google Authentication
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleAuthCallback
);

export default router;
