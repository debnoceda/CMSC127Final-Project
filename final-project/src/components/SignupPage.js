import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../styles/signupPage.css';

function SignupPage() {
  const [userNameReg, setUserNameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [firstNameReg, setFirstNameReg] = useState('');
  const [lastNameReg, setLastNameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [signupStatus, setsignupStatus] = useState('');

  const register = () => {
    Axios.post('http://localhost:3001/sign-up', {
      userName: userNameReg,
      password: passwordReg,
      firstName: firstNameReg,
      lastName: lastNameReg,
      email: emailReg
    }).then((response) => {
      if(response.data.success){
        setsignupStatus('Account created successfully!');
        setUserNameReg('');
        setPasswordReg('');
        setFirstNameReg('');
        setLastNameReg('');
        setEmailReg('');
      }
      else{
        setError('Failed to create an account. Please try again.');
      }
    })
    .catch((error) => {
      setError('Username or Email is already in use. Please enter another one.');
      setsignupStatus('');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userNameReg || !passwordReg || !firstNameReg || !lastNameReg || !emailReg) {
      setError('Please fill in all fields');
    } else {
      setError('');
      setsignupStatus('');
      register();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signupPage-container">
      <div className="signupLogo"></div>
      <h1 className="createAccount">CREATE ACCOUNT</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          value={userNameReg}
          onChange={(e) => setUserNameReg(e.target.value)}
          type="text"
          placeholder="Username"
          id="userName"
          name="userName"
          className="userNameInput"
        />
        <input
          value={passwordReg}
          onChange={(e) => setPasswordReg(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          id="password"
          name="password"
          className="passwordInput"
        />
        <input
          value={firstNameReg}
          onChange={(e) => setFirstNameReg(e.target.value)}
          type="text"
          placeholder="First Name"
          id="firstName"
          name="firstName"
          className="firstNameInput"
        />
        <input
          value={lastNameReg}
          onChange={(e) => setLastNameReg(e.target.value)}
          type="text"
          placeholder="Last Name"
          id="lastName"
          name="lastName"
          className="lastNameInput"
        />
        <input
          value={emailReg}
          onChange={(e) => setEmailReg(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          className="emailInput"
        />
        <button type="button" onClick={togglePasswordVisibility} className="showPasswordReg">
          {showPassword ? 'Hide' : 'Show'}
        </button>
        <button className="signup-button" type="submit">
          SIGN UP
        </button>
        <p className="error-message">{error}</p>
        <p className="success-message">{signupStatus}</p>
      </form>
      <Link to="/login" className="loginPage">
        Already have an account? Login here.
      </Link>
      <div className="extraSpace"></div>
    </div>
  );
}

export default SignupPage;
