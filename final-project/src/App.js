import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import HomePage from "./components/HomePage.js";
import BookingPage from "./components/BookingPage.js";
import LoginPage from "./components/LoginPage.js";
import SignupPage from "./components/SignupPage.js";
import MyprofilePage from "./components/MyprofilePage";
import Axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to update the login status and userID
  const handleLoginStatus = (status) => {
    setIsLoggedIn(status);
  };

  // Check if the user is logged in on component mount
  useEffect(() => {
    Axios.get("http://localhost:3001/auth/user", { withCredentials: true })
      .then((response) => {
        if (response.data.success) {
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={isLoggedIn ? <BookingPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<LoginPage handleLoginStatus={handleLoginStatus} />}
          />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/account" element={<MyprofilePage />} />
        </Routes>
        <Navbar isLoggedIn={isLoggedIn} />
      </Router>
    </div>
  );
}

export default App;
