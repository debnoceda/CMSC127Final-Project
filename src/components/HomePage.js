import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/homepage.css";

function HomePage() {
  return (
    <div>
      <div className ="dashboard"></div>
      <div className ="content">
          <Link to="/booking" className="book-now-rectangle"></Link>
          <Link to="/booking" className="book-now-container">BOOK NOW!</Link>
          <h1 className = "about-us">ABOUT US</h1>
          <p className="about-us-container">Welcome to LLD Deluxe Beauty Lounge, where beauty meets relaxation and confidence is amplified. 
          We are a premier destination committed to providing exceptional skincare and beauty treatments, tailored to enhance your natural radiance. 
          Experience our personalized services and let us help you unveil your true beauty from within.</p>
          <div className = "about-us-pic"></div>
          <h1 className = "services">MOST POPULAR SERVICES</h1>
          <div className = "gluta-drip-shape">
            <div className = "gluta-drip-pic">
              <img src = "/images/gluta_drip 1.svg" alt ="Gluta-Pic-Drip"/>
            </div>
          </div>
          <h1 className = "gluta-drip">GLUTATHIONE DRIP</h1>
          <p className = "gluta-content">Unleash your radiance, lighten your skin, boost your immune system, and detoxify!</p>
          <div className = "underarm-whitening-shape">
            <div className = "underarm-whitening-pic">
              <img src ="/images/underarm_whitening 1.svg" alt ="Underarm-Whitening-Pic"/>
            </div>
          </div>
          <div className = "underarm-whitening">UNDERARM WHITENING</div>
          <p className ="underarm-whitening-content">Step into a new level of flawlessly radiant underarm complexion!</p>
          <div className = "eyebag-removal-shape">
            <div className = "eyebag-removal-pic">
              <img src ="/images/eyebag_removal 2.svg" alt ="Eyebags-Removal-Pic"/>
            </div>
          </div>
          <div className = "eyebag-removal">EYEBAG REMOVAL</div>
          <p className ="eyebag-removal-content">Reduce puffiness, dark circles, and fine lines, giving you a brighter and more rejuvenated look.</p>
          <div className ="microneedling-shape"> 
            <div className = "microneedling-pic">
            <img src ="/images/microneedling 1.svg" alt ="Microneedling-Pic"/>
            </div>
          </div>
          <div className = "microneedling">MICRONEEDLING</div>
          <p className ="microneedling-content">Revitalize your skin with Micro-needling - the key to a smoother, firmer, and more youthful complexion.</p>
          <div className ="led-light-therapy-shape">
            <div className = "led-light-therapy-pic">
              <img src ="/images/led_facial 1.svg" alt ="LED-Light-Pic"/>
            </div>
          </div>
          <div className = "led-light-therapy">LED LIGHT THERAPY</div>
          <p className ="led-light-therapy-content">Experience a revolutionary treatment that harnesses the power of light to rejuvenate and transform your complexion.</p>
          <div className = "skin-facial-shape">
            <div className ="skin-facial-pic">
              <img src ="/images/skin_facial 1.svg" alt ="Skin-Facial-Pic"/>
            </div>
          </div>
          <div className = "skin-facial">SKIN FACIAL</div>
          <p className ="skin-facial-content">Unleash your radiance, lighten your skin, boost your immune system, and detoxify!</p>
          <div className = "girl-bg"></div>
          <div className = "girl-in-landing-page"></div>
          <p className = "tagline">IT'S A WHOLE NEW TREATMENT EXPERIENCE!</p>
          <Link to="/booking" className="book-now-bot-rectangle"></Link>
          <Link to="/booking" className="book-now-bot-container">BOOK NOW!</Link>
          <div className = "fb-icon"></div>
          <div className = "message-icon"></div>
          <div className = "call-icon"></div>
          <div className = "space"></div>
      </div>
    </div>
  );
}

export default HomePage;