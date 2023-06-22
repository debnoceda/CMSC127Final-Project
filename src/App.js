import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import HomePage from "./components/HomePage.js";
import BookingPage from "./components/BookingPage.js";
import LoginPage from "./components/LoginPage.js";
import SignupPage from "./components/SignupPage.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to update the login status
  const handleLoginStatus = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route
            path="/login"
            element={<LoginPage handleLoginStatus={handleLoginStatus} />}
          />
          <Route path="/sign-up" element={<SignupPage />} />
        </Routes>
        <Navbar isLoggedIn={isLoggedIn} />
      </Router>
    </div>
  );
}

export default App;
