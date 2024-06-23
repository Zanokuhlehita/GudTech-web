import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
// import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h2 className="section-title">
        <u>Contact Us</u>
      </h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <div className="contact-text">
            {/* <p>Phone</p> */}
            <p>+1 234 567 890</p>
          </div>
        </div><br/><br/>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <div className="contact-text">
            {/* <p>Location</p> */}
            <p>123 Main St, Thomastown VIC 3074, Australia</p>
          </div>
        </div><br/><br/>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div className="contact-text">
            {/* <p>Email</p> */}
            <p>info@example.com</p>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Google Map"
          width="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509428!2d144.96305771531676!3d-37.81627917975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3b4e4a5%3A0x2a2d4d8f1e32e3eb!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1615390502892!5m2!1sen!2sus"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      
    </section>
  );
};


export default ContactUs;