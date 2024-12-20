import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaUserCircle, FaBell, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false); // Manage hamburger menu state
  const location = useLocation(); // Get current location
  const isLogin = false; // Simulate login/logout
  const user = {
    name: "Sam",
    picture: "./myPic.png",
  };

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);

  const handleLogout = () => {
    console.log("User logged out");
    // Add logout logic here
  };

  const getActiveClass = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img
          src="./FitCare2.png"
          alt="CareType Logo"
          style={{ width: "150px", borderRadius: "6px" }}
        />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleHamburger}>
        {hamburgerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${hamburgerOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className={`nav-link ${getActiveClass("/")}`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/:userId"
            className={`nav-link ${getActiveClass("/dashboard/:userId")}`}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/diet-planner"
            className={`nav-link ${getActiveClass("/diet-planner")}`}
          >
            Planner
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/:userId"
            className={`nav-link ${getActiveClass("/profile/:userId")}`}
          >
            Profile
          </NavLink>
        </li>
        {!isLogin &&(<>
        <li>
          <NavLink to="/sign-in" className={`nav-link ${getActiveClass("/sign-in")}`}>Login</NavLink></li>
        <li><NavLink to="/sign-up" className={`nav-link ${getActiveClass("/sign-up")}`}>Register</NavLink>
        </li></>)}
      </ul>

      {/* User and Notifications Section */}
      <div className="navbar-user">
        {/* Notifications */}
        <NavLink to="/notifications" className="nav-icon">
          <FaBell size={20} />
        </NavLink>

        {/* Profile */}
        {isLogin && (
          <div className="profile" onClick={toggleDropdown}>
            {user.picture ? (
              <img
                src={user.picture}
                alt="User Profile"
                className="user-picture"
              />
            ) : (
              <FaUserCircle size={20} className="profile-icon" />
            )}
            <span className="user-name">{user.name}</span>
          </div>
        )}

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <button className="dropdown-item logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
