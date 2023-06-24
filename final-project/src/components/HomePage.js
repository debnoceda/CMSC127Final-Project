import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/homepage.css";
import Slideshow from '../components/SlideShow.js';

function HomePage() {
  const { pathname } = useLocation();

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div className="dashboard"></div>
      <div className="text-in-landing"></div>
      <div className="front-page-pic"></div>
      <div className="content">
        <Link to="/booking" className="book-now-rectangle"></Link>
        <Link to="/booking" className="book-now-container">
          BOOK NOW!
        </Link>
        <h1>My Slideshow</h1>
          <Slideshow />
        <h1 className="about-us">ABOUT US</h1>
        <p className="about-us-container">
          We are a premier destination committed to providing exceptional skincare and beauty treatments, tailored to enhance your natural radiance.
          Experience our personalized services and let us help you unveil your true beauty from within.
        </p>
        <div className="about-us-pic"></div>
        <h1 className="popular-services">MOST POPULAR SERVICES</h1>
        <div className="girl-bg"></div>
        <div className="girl-in-landing-page"></div>
        <p className="tagline"></p>
        <Link to="/booking" className="book-now-bot-rectangle"></Link>
        <Link to="/booking" className="book-now-bot-container">
          BOOK NOW!
        </Link>
        <Link to="/" className="logo" onClick={handleLogoClick}></Link>
        <Link to="/contact-us" className="fb-icon"></Link>
        <Link to="/contact-us" className="message-icon"></Link>
        <Link to="/contact-us" className="call-icon"></Link>
        <div className="space"></div>
      </div>
    </div>
  );
}

export default HomePage;
