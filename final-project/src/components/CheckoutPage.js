import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';
import Modal from 'react-modal';
import '../styles/CheckoutPage.css';

function CheckoutPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0); // New state variable
  const navigate= useNavigate(); // Access the history object for navigation
  const [showModal, setShowModal] = useState(false);
  const [bookingID, setBookingID] = useState();
  const [quantity, setQuantity] = useState();
  const [serviceName, setServiceName] = useState();

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Calculate the total price whenever selectedItems or quantities change
    let total = 0;
    selectedItems.forEach((item) => {
      const price = parseInt(item.value, 10);
      const quantity = parseInt(quantities[item.id], 10) || 1;
      total += price * quantity;
    });
    setTotalPrice(total);
  }, [selectedItems, quantities]);

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
      setQuantity(updatedQuantities);
      return updatedQuantities;
    });
  };

  const handleServiceSelection = (id) => {
    try {
      Axios.get('http://localhost:3001/bookings')
      .then(response => {
        const bookings = response.data;
        if (bookings.length > 0) {
          const lastBookingID = bookings[bookings.length - 1].bookingID;
          setBookingID(lastBookingID);
          console.log(lastBookingID);
          // Use the lastBookingID here
          // Do further processing or pass it to another function
        }
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error(error);
      });

      selectedItems.forEach((item) => {
        const serviceName = item.id;
        setServiceName(serviceName);
        Axios.get(`http://localhost:3001/services/${serviceName}`)
          .then((response) => {
            const serviceID = response.data[0].serviceID;
            console.log(serviceID);
            return Axios.post('http://localhost:3001/bookingServices', {
              bookingID: bookingID,
              serviceID: serviceID,
              quantity: quantity,
            });
            // Use the serviceID here
            // Do further processing or pass it to another function
          })
          .catch((error) => {
            // Handle any errors that occur during the request
            console.error(error);
          });
      });

    } catch (error) {
      console.error('Error retrieving service ID:', error);
    }
  };

  const handleProceedToCheckout = async () => {
    try {
      for (const item of selectedItems) {
        await handleServiceSelection(item.id);
      }

      navigate('/');

    } catch (error) {
      console.error('Error during checkout:', error);
    }
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
          <div>
          <div className="total-price">TOTAL PRICE: {totalPrice}</div> {/* Display the total price */}
          </div>
        )}
        {hasTotalSummary && (
          <div className="proceed-container">
            <button className="proceed-button" onClick={handleProceedToCheckout}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}

      {/* Modal for success message */}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Success Message"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>BOOKED SUCCESSFULLY</h2>
        <p>Your booking has been successfully processed.</p>
        <Link to="/" className="return-tohomepage">
            <button onClick={closeModal}>Return to Home Page</button>
        </Link>
      </Modal>
      </div>
    </div>
  );
}

export default CheckoutPage;