import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/" className="homepage-logo">
          <img
            src="/images/image_part_004.png"
            alt="Logo"
            width="161"
            height="132"
          />
        </Link>
      </div>
      <nav className="navbar">
        <div className="links-container">
          <Link to="/" className="home-container">
            HOME
          </Link>
          <Link to="/booking" className="booking-container">
            BOOKING
          </Link>
          <Link to="/login" className="login-container">
            LOGIN
          </Link>
          <div className ="reference-no-box"></div>
          <span className="reference-no-container"> REFERENCE NO.</span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;