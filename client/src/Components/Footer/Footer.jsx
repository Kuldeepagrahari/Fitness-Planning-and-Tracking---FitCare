import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-logo">
          <img 
            src="./FitCare2.png" 
            alt="FitCare Logo" 
            className="footer-logo-image" 
          />
          <p>Your ultimate companion for health and fitness.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h3 style={{fontWeight:"bold"}}>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3 style={{fontWeight:"bold"}}>Contact Us</h3>
          <p>Email: <a href="mailto:support@fitcare.com" style={{textDecoration:"none", color:"white"}}>support@fitcare.com</a></p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Fitness St, Wellness City, WC 54321</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p >&copy; {new Date().getFullYear()} FitCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
