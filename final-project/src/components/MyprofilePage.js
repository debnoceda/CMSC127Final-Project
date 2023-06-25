import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../styles/myprofilePage.css';

function MyprofilePage({ handleLogout }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    // Retrieve the userName from session storage
    const userName = sessionStorage.getItem('userName');

    // Make a GET request to fetch user details based on userID
    Axios.get(`http://localhost:3001/users/${userName}`)
      .then(response => response.data)
      .then(user => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setProfilePicture(user.profilePicture)
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  return (
    <div className="myProfile-container">
      <div className="profilePicture-container">
        {profilePicture ? (<img src={profilePicture} alt="Profile"/>)
        : (<img src="../images/default-profile-picture.png" alt="DefaultProfilePicture" width="387" height="387"/>)}
      </div>
      <h1 className="name">{firstName} {lastName}</h1>
      <Link to="/account/edit-profile"className='edit-profile-icon'></Link>
      <Link to="/account/edit-profile"className='edit-profile'>Edit Profile</Link>
      <div className='availed-services'>Availed Services</div>
      <div className='service-history'>View Service History</div>
      <div className='services-box'></div>
      <div className='all'>ALL</div>
      <div className='completed'>COMPLETED</div>
      <div className='cancelled'>CANCELLED</div>
      <div className='services-container'></div>
      <Link to="/account/changePassword" className="changePass-container"></Link>
      <Link to="/account/changePassword" className="changePass">Change Password</Link>
      <div className="logOut-container" onClick={handleLogout}></div>
      <div className="logOut-icon" onClick={handleLogout}></div>
      <div className="logOut" onClick={handleLogout}>
        Log Out
      </div>
    </div>
  );
}

export default MyprofilePage;
