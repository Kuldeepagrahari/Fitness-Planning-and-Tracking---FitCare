import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleGoogleSignUp = () => {
    console.log("Google Sign-Up Clicked");
    // Implement Google sign-up functionality here
  };

  const handleOtpRequest = () => {
    console.log("OTP Requested");
    setIsOtpSent(true);
    // Implement OTP request functionality here
  };

  const handleOtpSubmit = () => {
    console.log("OTP Submitted:", otp);
    // Implement OTP verification logic here
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign-Up Form Submitted");
    // Implement sign-up form submission logic here
  };

  return (
    <div className="sign-up">
      {/* Left Section */}
      <div className="sign-up-left">
      <img src="FitCare2.png" alt="" style={{borderRadius:"20px", marginBottom:"50px"}}/>
        <h1 className="app-title">Join FitCare</h1>
        <p className="app-description">
          Take control of your health and fitness journey with ease.
        </p>
      </div>

      {/* Right Section */}
      <div className="sign-up-right">
        <h2 style={{fontSize:"60px", marginBottom:"50px"}}>Create your account</h2>
        <form className="sign-up-form" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Full Name"
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            required
          />
          <div className="otp-section">
            <input
              type="text"
              placeholder="Phone Number"
              className="form-input"
              required
            />
            <button
              type="button"
              className="btn secondary-btn"
              onClick={handleOtpRequest}
            >
              {isOtpSent ? "Resend OTP" : "Send OTP"}
            </button>
          </div>
          {isOtpSent && (
            <div className="otp-verification">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="form-input"
              />
              <button
                type="button"
                className="btn secondary-btn"
                onClick={handleOtpSubmit}
              >
                Verify OTP
              </button>
            </div>
          )}
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            required
          />
          <button type="submit" className="btn primary-btn">
            Sign Up
          </button>
        </form>
        <div className="google-sign-up" onClick={handleGoogleSignUp}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google Icon"
            className="google-icon"
          />
          <span>Sign Up with Google</span>
        </div>
        <p className="login-link">
          Already have an account? <a href="/sign-in">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
