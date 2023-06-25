import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/EditprofilePage.css";

function EditProfilePage({handleLogout}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAdd, setEmailAdd] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userName = sessionStorage.getItem('userName');

    Axios.get(`http://localhost:3001/users/${userName}`)
      .then(response => response.data)
      .then(user => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmailAdd(user.emailAdd);
        setPhoneNumber(user.phoneNum);
        setProfilePicture(user.profilePicture);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  const handleSave = () => {
    const userName = sessionStorage.getItem('userName');

    Axios.put(`http://localhost:3001/users/${userName}`, {
      firstName: firstName,
      lastName: lastName,
      emailAdd: emailAdd,
      phoneNum: phoneNumber,
      profilePicture: profilePicture
    })
      .then(response => {
        navigate('/account');
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  const handleDelete = () => {
    const userName = sessionStorage.getItem('userName');
  
    fetch(`http://localhost:3001/users/${userName}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Account deleted successfully.');
          sessionStorage.clear();
          handleLogout();
          navigate('/');
        } else {
          console.error('Failed to delete account.');
        }
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };
  

  const handleCancel = () => {
    navigate('/account');
  };

  const handleProfilePictureChange = (e) => {
    const userName = sessionStorage.getItem('userName');
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('profilePicture', file);

    // Make a POST request to update the profile picture
    Axios.post(`http://localhost:3001/users/${userName}/profile-picture`, formData)
      .then(response => {
        console.log(response.data);
        // Update the profile picture state
        setProfilePicture(response.data.profilePicture);
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  return (
    <div className="editProfile-container">
      <h1 className="profile-details">PROFILE DETAILS</h1>
      <div className="profilePicture-container">
        {profilePicture ? (
          <img src={profilePicture} alt="Profile" />
        ) : (
          <img
            src="../images/default-profile-picture.png"
            alt="DefaultProfilePicture"
            width="387"
            height="387"
          />
        )}
      </div>
      <input
        className='firstNameEditor'
        type="text"
        value={firstName}
        placeholder='First Name'
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        className='lastNameEditor'
        type="text"
        value={lastName}
        placeholder='Last Name'
        onChange={e => setLastName(e.target.value)}
      />
      <input
        className='emailAddressEditor'
        type="text"
        value={emailAdd}
        placeholder='Email Address'
        onChange={e => setEmailAdd(e.target.value)}
      />
      <input
        className='phoneNumberEditor'
        type="text"
        value={phoneNumber}
        placeholder='Phone Number'
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <button className='cancelButton' onClick={handleCancel}>
        CANCEL
      </button>
      <button className='saveButton' onClick={handleSave}>
        SAVE
      </button>
      <button className='deleteButton' onClick={handleDelete}>
        DELETE
      </button>
      <label className='changeProfilePic'>
        Change Profile Picture
        <input
            className='upload-image'
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
        />
      </label>
      {/* <div className='changeProfilePic-icon'></div> */}
    </div>
  );
}

export default EditProfilePage;
