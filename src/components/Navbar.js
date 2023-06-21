import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/" className="homepage-logo">
          <img
            src="/images/logo.svg"
            alt="Logo"
            width="222"
            height="222"
          />
        </Link>
      </div>
      <nav className="navbar">
        <div className="links-container">
          <div className="text-container">
            <Link
              to="/"
              className="home-container"
            >
              HOME
            </Link>
            <Link
              to="/booking"
              className="booking-container"
            >
              BOOKING
            </Link>
            <Link
              to="/contact-us"
              className="contact-us-container"
            >
              CONTACT US
            </Link>
          </div>
          <Link to="/login" className="login-box"></Link>
          <Link
            to="/login"
            className="login-container"
          >
            LOGIN
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
