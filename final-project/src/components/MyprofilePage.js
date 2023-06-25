import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../styles/myprofilePage.css';

function MyprofilePage({ handleLogout }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  useEffect(() => {
    // Retrieve the userName from session storage
    const userName = sessionStorage.getItem('userName');

    // Make a GET request to fetch user details based on userID
    Axios.get(`http://localhost:3001/users/${userName}`)
      .then(response => response.data)
      .then(user => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setNewFirstName(user.firstName); // Set the current first name in the edit mode
        setNewLastName(user.lastName); // Set the current last name in the edit mode
        setProfilePicture(user.profilePicture)
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  const handleEditProfile = () => {
    if (editMode) {
      // If already in edit mode, cancel the changes
      setNewFirstName(firstName);
      setNewLastName(lastName);
      setNewProfilePicture(profilePicture)
    } else {
      setNewFirstName(firstName); // Set the current first name in the edit mode
      setNewLastName(lastName); // Set the current last name in the edit mode
      setNewProfilePicture(profilePicture);
    }
    setEditMode(!editMode); // Toggle the edit mode
  };

  const handleSaveProfile = () => {
    // Make a PUT request to update the user's profile
    const userName = sessionStorage.getItem('userName');
    Axios.put(`http://localhost:3001/users/${userName}`, {
      firstName: newFirstName,
      lastName: newLastName,
      profilePicture: newProfilePicture
    })
      .then(response => {
        setFirstName(newFirstName);
        setLastName(newLastName);
        setProfilePicture(newProfilePicture);
        setEditMode(false);
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  return (
    <div className="myProfile-container">
      <div className="profilePicture-container">
        {profilePicture ? (<img src={profilePicture} alt="Profile"/>)
        : (<img src="../images/default-profile-picture.png" alt="DefaultProfilePicture" width="387" height="387"/>)}
      </div>
      {editMode ? (
        <div>
          <input
            className='firstName-editor'
            type="text"
            value={newFirstName}
            onChange={e => setNewFirstName(e.target.value)}
          />
          <input
            className='lastName-editor'
            type="text"
            value={newLastName}
            onChange={e => setNewLastName(e.target.value)}
          />
          <button className='cancel-button' onClick={handleEditProfile}>
            Cancel
          </button>
          <button className='save-button' onClick={handleSaveProfile}>Save</button>
        </div>
      ) : (
        <h1 className="name">{firstName} {lastName}</h1>
      )}
      <div className="edit-profile-icon" onClick={handleEditProfile}></div>
      {editMode ? null : (
        <div className="edit-profile" onClick={handleEditProfile}>
          Edit Profile
        </div>
      )}
      <div className='availed-services'>Availed Services</div>
      <div className='service-history'>View Service History</div>
      <div className='services-box'></div>
      <div className='all'>ALL</div>
      <div className='completed'>COMPLETED</div>
      <div className='cancelled'>CANCELLED</div>
      <div className='services-container'></div>
      <Link to="/help-center" className="helpCenter-container"></Link>
      <Link to="/help-center" className="helpCenter-icon"></Link>
      <Link to="/help-center" className="helpCenter">
        Help Center
      </Link>
      <div className="logOut-container" onClick={handleLogout}></div>
      <div className="logOut-icon" onClick={handleLogout}></div>
      <div className="logOut" onClick={handleLogout}>
        Log Out
      </div>
    </div>
  );
}

export default MyprofilePage;
