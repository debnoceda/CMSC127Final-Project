import React, { useState, useEffect } from 'react';
import {Link } from "react-router-dom";
import "../styles/CheckoutPage.css"
import Modal from 'react-modal';

const CheckoutPage = () => {
  const [inputValues, setInputValues] = useState({});
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isFormComplete, setIsFormComplete] = useState(false); // State to track form completion
  const [isSubmitClicked, setIsSubmitClicked] = useState(false); // State to track if submit button is clicked
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

  const handleInputChange = (event, inputId) => {
    setInputValues(prevState => ({
      ...prevState,
      [inputId]: event.target.value
    }));
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // Function to check if all required inputs are filled
    const checkFormCompletion = () => {
      const requiredInputs = ['firstname', 'email', 'lastname', 'confirmEmail', 'contact', 'address', 'age'];
      const isComplete = requiredInputs.every(input => inputValues[input] && inputValues[input].trim() !== '');
      setIsFormComplete(isComplete);
    };

    checkFormCompletion();
  }, [inputValues]);

  const handleProceedClick = () => {
    if (isFormComplete) {
      // Display success message modal
      setIsModalOpen(true);
    } else {
      setIsSubmitClicked(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="checkout-container">
      <div className="div">
        <div className='required-fields'>
        {isSubmitClicked && !isFormComplete && (
          <p className="required-fields-message">Please fill the required fields</p>
        )}
        </div>
        <div className="group">
          <div className="FIRST-NAME-required">
            <span className="text-wrapper">FIRST NAME </span>
            <span className="span">(required)</span>
            <input
                type="text"
                value={inputValues.firstname || ''}
                className='firstname'
                onChange={(event) => handleInputChange(event, 'firstname')}
              />
          </div>
        </div>
        <div className="group-2">
          <div className="EMAIL-required">
            <span className="text-wrapper-2">EMAIL </span>
            <span className="text-wrapper-3">(required)</span>
            <input
                type="text"
                value={inputValues.email || ''}
                className='email'
                onChange={(event) => handleInputChange(event, 'email')}
              />
          </div>
        </div>
        <div className="group-3">
          <div className="LAST-NAME-required">
            <span className="text-wrapper-4">LAST NAME </span>
            <span className="text-wrapper-5">(required)</span>
            <input
                type="text"
                value={inputValues.lastname || ''}
                className='lastname'
                onChange={(event) => handleInputChange(event, 'lastname')}
              />
          </div>
        </div>
        <div className="group-4">
          <div className="CONFIRM-EMAIL">
            <span className="text-wrapper-6">CONFIRM EMAIL </span>
            <span className="text-wrapper-7">(required)</span>
            <input
                type="text"
                value={inputValues.confirmEmail || ''}
                className='confirmEmail'
                onChange={(event) => handleInputChange(event, 'confirmEmail')}
              />
          </div>
        </div>
        <div className="group-5">
          <div className="CONTACT-NUMBER">
            <span className="text-wrapper-8">CONTACT NUMBER </span>
            <span className="text-wrapper-9">(required)</span>
            <input
                type="text"
                value={inputValues.contact || ''}
                className='contact'
                onChange={(event) => handleInputChange(event, 'contact')}
              />
          </div>
        </div>
        <div className="ADDRESS-required">
          <span className="text-wrapper-10">ADDRESS </span>
          <span className="text-wrapper-11">(required)</span>
          <p></p>
          <input
                type="text"
                value={inputValues.address || ''}
                className='address'
                onChange={(event) => handleInputChange(event, 'address')}
              />
        </div>
        <div className="text-wrapper-12">
          <p className="dateText">DATE </p>
          <input
          type="date"
          value={selectedDate}
          className='date'
          onChange={handleDateChange}
        />
        </div>
        <div className="group-6">
          <div className="AGE-required">
            <span className="text-wrapper-13">AGE </span>
            <span className="text-wrapper-14">(required)</span>
            <input
                type="text"
                value={inputValues.age || ''}
                className='age'
                onChange={(event) => handleInputChange(event, 'age')}
              />
          </div>
        </div>
        <div className="text-wrapper-15">
        <input
          type="radio"
          name="radio"
          value="no"
          className='no'
          checked={selectedOption === "no"}
          onChange={handleOptionChange}
        />
          <span className="noText"> NO</span>
        </div>

        <div className="text-wrapper-16">
          <input
            type="radio"
            name="radio"
            value="no"
            className='yes'
            checked={selectedOption === "no"}
            onChange={handleOptionChange}
          />
          <span className="yesText"> YES</span>
        </div>

        <h1 className="booking-form">BOOKING FORM</h1>
        <div className="overlap-group">
          <div className="personal-details">PERSONAL DETAILS</div>
          <p className="p">Are you a previous customer? (required)</p>
        </div>
        <p className="text-wrapper-18">Choose a day and time for your booking</p>
        <div className="text-wrapper-19">
          <p className="timeText">TIME </p>
          <input
          type="time"
          value={selectedTime}
          className='time'
          onChange={handleTimeChange}
        />
        </div>

        <div className="proceed-container">

        <Link
          to={isFormComplete ? "/checkout" : "#"}
          className={`proceed-button ${!isFormComplete ? 'disabled' : ''}`}
          onClick={handleProceedClick}
        >
          PROCEED
        </Link>
      </div>

            {/* Modal for success message */}
      <Modal
        isOpen={isModalOpen}
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


export default CheckoutPage