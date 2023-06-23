import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/myprofilePage.css'

function MyprofilePage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    // Retrieve the userName from session storage
    const userName = sessionStorage.getItem('userName');

    // Make a GET request to fetch user details based on userID
    Axios.get(`/users/${userName}`)
        .then(response => response.data)
        .then(user => {
            setFirstName(user.firstName);
            setLastName(user.lastName);
        })
        .catch(error => {
            console.error('Error', error);
        });
  }, []);

  return (
    <div className='myProfile-container'>
      <h1 className='name'>First Name: {firstName} Last Name: {lastName}</h1>
    </div>
  );
}

export default MyprofilePage;
