import React, { useState } from 'react';
// import './Navbar.css';
// import logo from '../assets/GHPlogo.jprg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
        <div className="nav-logo"><h1>GUDTECH</h1></div>
          {/* <img src={logo} /> */}
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#">___</a></li>
          <li><a href="#">___</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
