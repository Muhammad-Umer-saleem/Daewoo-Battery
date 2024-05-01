import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="form-container">
      <header className="header">Contact Us</header>
      <form action="#" className="form">
        <div className="input-box">
          <label>First Name</label>
          <input type="text" placeholder="Enter first name" required />
        </div>
        <div className="input-box">
          <label>Last Name</label>
          <input type="text" placeholder="Enter last name" required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>
        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter phone number" required />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
