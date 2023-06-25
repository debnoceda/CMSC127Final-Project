import React, { useState } from 'react';
import {Link } from "react-router-dom";
import "../styles/BookingPage.css";

function BookingPage (){

  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleItemChange = (event) => {
    const { id, value, checked } = event.target;
    if (checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, { id, value }]);
      setQuantities((prevQuantities) => ({ ...prevQuantities, [id]: 1 }));
    } else {
      setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((item) => item.id !== id));
      setQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[id];
        return updatedQuantities;
      });
    }
  };

  const handleQuantityChange = (event, id) => {
    const { value } = event.target;
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[id] = value;
      if (value === '0') {
        delete updatedQuantities[id];
        setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((item) => item.id !== id));
        const checkbox = document.getElementById(id);
        if (checkbox) {
          checkbox.checked = false;
        }
      }
      return updatedQuantities;
    });
  };

  const hasTotalSummary = selectedItems.length > 0;


    return (
        <div className="booking-form">
        <div className="div">
        <div className="box"></div>
        <h1 className="clinical-services">CLINICAL SERVICES</h1>
        <div className="checkboxes">
            <input type="checkbox" value="1000" id="KOREAN SNOW DRIP (GLUTATHIONE)"  onChange={handleItemChange} />
            <input type="checkbox" value="1100" id="UNDERARM WHITENING"onChange={handleItemChange}/>
            <input type="checkbox" value="1200" id="MEGA WHITENING CINDERELLA DRIP" onChange={handleItemChange}/>
            <input type="checkbox" value="1300" id="STEM CELL DRIP"onChange={handleItemChange}/>
            <input type="checkbox" value="1400" id="MESO LIPO (ARMS, LEGS, STOMACH)"onChange={handleItemChange}/>
            <input type="checkbox" value="1500" id="4D BODY CONTOUR" onChange={handleItemChange}/>
            <input type="checkbox" value="1600" id="MESO LIPO (FACE V-SHAPE)" onChange={handleItemChange}/>
            <input type="checkbox" value="1700" id="ELIXIR FACIAL (BASIC, ACNE, 3D)" onChange={handleItemChange}/>
            <input type="checkbox" value="1800" id="EYEBAG REMOVAL" onChange={handleItemChange}/>
            <input type="checkbox" value="1900" id="KOREAN GLASS SKIN FACIAL" onChange={handleItemChange}/>
            <input type="checkbox" value="2000" id="ELIXIR WHOLE BODY SCULPTING" onChange={handleItemChange}/>
            <input type="checkbox" value="2100" id="MICRONEEDLING" onChange={handleItemChange}/>
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


        {hasTotalSummary && (
          <div className="overlap">
          <div className="rectangle-2" />
          <div className="total-summary">TOTAL SUMMARY</div>
          <div className="rectangle"/>
          <div className="summary-services">
            <ul className="items">
              {selectedItems.map((item, index) => (
                <div key={index} className="flex-container">
                  <input
                    type="number"
                    className="number-box"
                    step="1"
                    value={quantities[item.id] || ''}
                    onChange={(event) => handleQuantityChange(event, item.id)}
                  />
                  <span className="item-name">{item.id}</span>
                  <span className="item-price">{item.value}</span>
                </div>
              ))}
            </ul>
          </div>         
        </div>
        )}

        {hasTotalSummary && (
          <div className="proceed-container">
            <Link to="/checkout" className="proceed-button">
              PROCEED TO CHECKOUT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingPage;

