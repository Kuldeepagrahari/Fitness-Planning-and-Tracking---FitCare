import React from "react";
import "./Login.css";

const Login = () => {
  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
    // Implement Google login functionality here
  };

  return (
    <div className="login">
      {/* Left Section */}
      <div className="login-left">

        <img src="FitCare2.png" alt="" style={{borderRadius:"20px", marginBottom:"50px"}}/>
        <h1 className="app-title">Welcome to FitCare</h1>
        <p className="app-description">
          Your one-stop solution for fitness and health planning.
        </p>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <h2 style={{fontSize:"60px", marginBottom:"50px"}}>Login</h2>
        <form className="login-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-input"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="form-input"
          />
          <button type="submit" className="btn primary-btn">
            Login
          </button>
        </form>
        <div className="google-login" onClick={handleGoogleLogin}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google Icon"
            className="google-icon"
          />
          <span>Login with Google</span>
        </div>
        <p className="register-link">
          Don't have an account? <a href="/sign-up">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
