import User from "../models/User";
import crypto from "crypto";
import { sendOtpEmail } from "../utils/emailService.js";
import { requestOtpSchema, verifyOtpSchema } from "../validations/authValidation.js";

// Generate OTP
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

// Request OTP
exports.requestOtp = async (req, res, next) => {
  try {
    // Validate input
    const { email } = requestOtpSchema.parse(req.body);

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email });
    }

    const otp = generateOtp();
    user.otp = otp;
    user.otpExpiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    await sendOtpEmail(email, otp);

    res.status(200).json({ message: "OTP sent to your email." });
  } catch (error) {
    next(error);
  }
};

// Verify OTP
exports.verifyOtp = async (req, res, next) => {
  try {
    // Validate input
    const { email, otp } = verifyOtpSchema.parse(req.body);

    const user = await User.findOne({ email });

    if (!user || user.otp !== otp || user.otpExpiresAt < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    // Clear OTP fields
    user.otp = undefined;
    user.otpExpiresAt = undefined;
    await user.save();

    res.status(200).json({ message: "OTP verified successfully.", user });
  } catch (error) {
    next(error);
  }
};

// Google Callback
exports.googleAuthCallback = (req, res) => {
  res.status(200).json({ message: "Google Authentication successful.", user: req.user });
};
