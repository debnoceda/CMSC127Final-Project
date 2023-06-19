import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import HomePage from "./components/HomePage.js";
import BookingPage from "./components/BookingPage.jsx";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/booking' element={<BookingPage/>}/>
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;