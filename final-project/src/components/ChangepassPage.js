import React, { useState } from 'react';
import '../styles/ChangepassPage.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function ChangepassPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmNewPasswordVisible, setConfirmNewPasswordVisible] = useState(false);
  const [error, setErrorMessage] = useState('');
  const [success, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!currentPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmNewPasswordVisibility = () => {
    setConfirmNewPasswordVisible(!confirmNewPasswordVisible);
  };

  const handleSaveButtonClick = () => {
    // Check if the new password matches the confirm new password
    if (newPassword === confirmNewPassword) {
      const userName = sessionStorage.getItem('userName');
      // Passwords match, send request to update password
      Axios.put(`http://localhost:3001/users/${userName}/change-password`, {
        currentPassword: currentPassword,
        newPassword: newPassword,
      })
        .then((response) => {
          // Handle success response
          console.log(response.data);
          setSuccessMessage("Password changed.")
          // Reset form and clear errors
          setCurrentPassword('');
          setNewPassword('');
          setConfirmNewPassword('');
          setPasswordMatchError(false);
        })
        .catch((error) => {
            setErrorMessage('There is an error in changing your password. Please try again.')
          // Handle error response
          console.error(error);
        });
    } else {
      // Passwords do not match
      setErrorMessage('Password does not match.')
      setPasswordMatchError(true);
    }
  };

  const handleCancel = () => {
    navigate('/account');
  };

  return (
    <div className="changePassword-container">
      <div className="change-password">CHANGE PASSWORD</div>
      <div className="password-rules">
        Password must contain at least 1 letter and 1 symbol. Minimum length is 8 characters.
      </div>
      <div className="currentPassword">Current Password</div>
      <input
        className="currentPassword-container"
        type={currentPasswordVisible ? 'text' : 'password'}
        value={currentPassword}
        onChange={handleCurrentPasswordChange}
      ></input>
      <div className="newPassword">New Password</div>
      <input
        className="newPassword-container"
        type={newPasswordVisible ? 'text' : 'password'}
        value={newPassword}
        onChange={handleNewPasswordChange}
      ></input>
      <div className="confirm-newPassword">Confirm New Password</div>
      <input
        className="confirm-newPassword-container"
        type={confirmNewPasswordVisible ? 'text' : 'password'}
        value={confirmNewPassword}
        onChange={handleConfirmNewPasswordChange}
      ></input>
      {passwordMatchError && (
        <div className="password-match-error">Passwords do not match.</div>
      )}
      <button className="currentPassword-toggle"
          onClick={toggleCurrentPasswordVisibility}
        >
          {currentPasswordVisible ? 'Hide' : 'Show'}
        </button>
      <button className="newPassword-toggle"
          onClick={toggleNewPasswordVisibility}
        >
          {newPasswordVisible ? 'Hide' : 'Show'}
        </button>
      <button className="confirm-newPassword-toggle"
          onClick={toggleConfirmNewPasswordVisibility}
        >
          {confirmNewPasswordVisible ? 'Hide' : 'Show'}
        </button>
      <button className="changePassword-saveButton" onClick={handleSaveButtonClick}>
        SAVE
      </button>
      <button className="changePassword-cancelButton" onClick={handleCancel}>CANCEL</button>
      <p className="changePassword-error">{error}</p>
    <p className="changePassword-success">{success}</p>
    </div>
  );
}

export default ChangepassPage;
