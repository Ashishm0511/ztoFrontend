
import React, { useState, useEffect } from 'react';
import './Navbar.css';

import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleLogout = (e) =>
{
      e.preventDefault();
      localStorage.removeItem("email");
  }

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <h1>ZTO</h1>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'active' : ''}></span>
        <span className={isOpen ? 'active' : ''}></span>
        <span className={isOpen ? 'active' : ''}></span>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/exams">Exams</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to='/checkresult'> Results </Link></li>
      </ul>

      <div className="navbar-buttons">

        <button className="login-btn" onClick={handleLogin}>Login</button>
        <button className="getstarted-btn" onClick={handleLogout}> logout</button>
      </div>
    </nav>
  );
};

export default Navbar;