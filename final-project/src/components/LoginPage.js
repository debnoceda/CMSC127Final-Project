import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../styles/loginPage.css';

function LoginPage({ handleLoginStatus }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      userName: userName,
      password: password,
    }).then((response) => {
      console.log(response.data);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(userName);
        handleLoginStatus(true);
        sessionStorage.setItem("userName", userName); // store the userID in session storage
        navigate('/'); // Redirect to /homepage
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginPage-container">
      <div className="logo-in-login"></div>
      <h1 className="welcome">Welcome!</h1>
      <h1 className="log-in">Log-in to continue</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          value={userName}
          onChange={(e) => {console.log(e); setUserName(e.target.value)}}
          type="text"
          placeholder="Username"
          id="userName"
          name="userName"
          className="userName-input"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          id="password"
          name="password"
          className="password-input"
        />
        <button type="button" onClick={togglePasswordVisibility} className="password-toggle-button">
          {showPassword ? 'Hide' : 'Show'}
        </button>
        <button onClick={login} type="button" className="login-button">
          LOG IN
        </button>
      </form>
      <Link to="/sign-up" className="register-button">
        Create new account
      </Link>
      <div className="extra-space"></div>
      <h1 className="loginStatus"> {loginStatus} </h1>
    </div>
  );
}

export default LoginPage;
