import React from 'react';
import './Footer.css'; 

const Footer = () => { 
  return (
    <footer className="footer"> 
      <div className="footer-container">
        <img
          className="logo-default"
          src="https://daewoobattery.com/wp-content/uploads/2018/01/logo-daewoo.png"
          alt="Daewoo Logo"
        />
        <p>
          Manufacturer of Lead-Acid batteries in Pakistan offering a complete
          range of 100% Maintenance Free Batteries for Automotive and
          Specialized Deep Cycle Batteries for UPS and Solar Systems.
        </p>
        <p>Email: info@treetbatteries.com</p>
        <p>Certified | ISO 9001 - ISO 14001</p>
        <p>Events & Exhibitions, Battery Care Tips & FAQ, Find Your Battery</p>
      </div>
      <p>&copy; 2024 Treet Batteries. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
