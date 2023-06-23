import React from "react";
import {Link } from "react-router-dom";
import "../styles/BookingPage.css";

function BookingPage (){

  return (
    <div className="booking-form">
      <div className="div">
        <div className="box"></div>
        <h1 className="clinical-services">CLINICAL SERVICES</h1>
        <div className="checkboxes">
            <input type="checkbox" id="korean-snow" name="checkbox" />
            <input type="checkbox" id="underarm" name="checkbox"/>
            <input type="checkbox" id="mega" name="checkbox"/>
            <input type="checkbox" id="stem" name="checkbox"/>
            <input type="checkbox" id="meso1" name="checkbox"/>
            <input type="checkbox" id="body-contour" name="checkbox"/>
            <input type="checkbox" id="meso2" name="checkbox"/>
            <input type="checkbox" id="eelixir-facial" name="checkbox"/>
            <input type="checkbox" id="eyebag" name="checkbox"/>
            <input type="checkbox" id="korean-glass" name="checkbox"/>
            <input type="checkbox" id="elixir-whole" name="checkbox"/>
            <input type="checkbox" id="microneedling" name="checkbox"/>
        </div>
        <div className="service-name">
            <div className="korean-snow">KOREAN SNOW DRIP (GLUTATHIONE)</div>
            <div className="underarm-white">UNDERARM WHITENING</div>
            <div className="mega-white">MEGA WHITENING CINDERELLA DRIP</div>
            <div className="stem-cell">STEM CELL DRIP</div>
            <div className="meso-lipo">MESO LIPO (ARMS, LEGS, STOMACH)</div>
            <div className="body-contour">4D BODY CONTOUR</div>
            <div className="meso-lipo2">MESO LIPO (FACE V-SHAPE)</div>
            <div className="elixir-facial">ELIXIR FACIAL (BASIC, ACNE, 3D)</div>
            <div className="eyebag-remove">EYEBAG REMOVAL</div>
            <div className="korean-glass">KOREAN GLASS SKIN FACIAL</div>
            <div className="elixir-whole">ELIXIR WHOLE BODY SCULPTING</div>
            <div className="microneedling">MICRONEEDLING</div>
        </div>
        <div className="service-price">
            <div className="korean-snow-price">1000</div>
            <div className="elixir-whole-price">1500</div>
            <div className="eyebag-price">1400</div>
            <div className="meso2-price">1300</div>
            <div className="meso1-price">1200</div>
            <div className="mega-price">1100</div>
            <div className="underarm-price">1600</div>
            <div className="microneedling-price">2100</div>
            <div className="korean-glass-price">2000</div>
            <div className="elixir-facial-price">1900</div>
            <div className="body-contour-price">1800</div>
            <div className="stem-price">1700</div>
        </div>
        <div className="proceed-container">
        <Link to="/checkout" className="proceed-button">PROCEED TO CHECKOUT</Link>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;

