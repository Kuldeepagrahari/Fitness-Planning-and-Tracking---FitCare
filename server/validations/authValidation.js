import { z } from "zod";

const requestOtpSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const verifyOtpSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  otp: z
    .string()
    .length(6, { message: "OTP must be exactly 6 digits" })
    .regex(/^\d+$/, { message: "OTP must be numeric" }),
});

module.exports = { requestOtpSchema, verifyOtpSchema };
