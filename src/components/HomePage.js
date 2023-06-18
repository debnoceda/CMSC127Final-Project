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
          <p className="about-us-container">Redefining beauty since 2021. This dynamic cosmetic company offers diverse products for all skin tones and types. 
          Committed to sustainability, LLD prioritizes eco-friendly practices and responsible ingredient sourcing. 
          With an unwavering dedication to customer satisfaction, LLD empowers individuals to embrace their authentic selves. 
          Through innovative releases and impactful campaigns, LLD leaves a lasting impact in the beauty industry. 
          Join LLD in celebrating unique beauty and confidently shining from within.</p>
          <div className = "facelift"></div>
          <div className = "facelift-border"></div>
          <h1 className = "services">MOST AVAILED SERVICES</h1>
          <div className = "icons"></div>
          <h1 className = "gluta-drip">GLUTATHIONE DRIP</h1>
          <p className = "gluta-content">Radiant skin achieved through our Glutathione Drip infusion treatment.</p>
          <div className = "underarm-whitening">UNDERARM WHITENING</div>
          <div className = "eyebag-removal">EYEBAG REMOVAL</div>
          <div className = "microneedling">MICRONEEDLING</div>
          <div className = "lld-facial">LLD FACIAL</div>
          <div className = "skin-facial">SKIN FACIAL</div>
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