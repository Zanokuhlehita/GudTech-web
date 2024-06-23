import React from 'react';
// import './Footer.css';
import logo from '../assets/GHPlogo.jpeg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Footer Image" className="footer-image" />
        <div className="footer-text">
          <p>footer yet to be placed text1</p>
          <p>Fofooter yet to be placed text2</p>
          <p>Foofooter yet to be placed texte 3</p>
          <p>Ffooter yet to be placed text 4</p>
          <p>8am-pm</p>
        </div>
      </div>
      <p className="footer-designed-by">Designed by NCODIA</p>
    </footer>
  );
};

export default Footer;
