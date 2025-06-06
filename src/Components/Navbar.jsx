import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>ZTO</h1>
      </div>

      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/exams">Exams</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="navbar-buttons">
        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
        <button className="getstarted-btn" onClick={() => navigate('/Register')}>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;