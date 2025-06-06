import React, { useState, useEffect } from 'react';
import './Navbar.css';

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
        <li><a href="/" onClick={closeMenu}>Home</a></li>
        <li><a href="/about" onClick={closeMenu}>About</a></li>
        <li><a href="/exams" onClick={closeMenu}>Exams</a></li>
        <li><a href="/resources" onClick={closeMenu}>Resources</a></li>
        <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <div className="navbar-buttons">
        <button className="login-btn">Login</button>
        <button className="getstarted-btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;