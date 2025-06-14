import React, { useState } from 'react'; // ✪ Added useState for form handling
import axios from 'axios'; // ✪ New: for sending form data to backend
import linkedin from '../linkedin.jpeg';
import github from '../github.png';
import website from '../website.png';
import './Theme.css';
import { useEffect } from 'react';


function Contact() {
  // 🔜 Added state to track form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 🔜 Added state for confirmation or error messages
  const [statusMessage, setStatusMessage] = useState('');

  // 🔜 Handle input changes
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  // 🔜 Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatusMessage('Sending...');

  try {
    await axios.post('https://portfolio-backend-vc9x.onrender.com/api/contact', formData);
    setStatusMessage('Thanks for your message. I will be in touch as soon as possible.');
    setFormData({ name: '', email: '', message: '' });

    // ✅ Scroll to top after successful submission
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (error) {
    console.error('Error sending message:', error);
    setStatusMessage('Oops! Something went wrong.');
  }
};

useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

  
  return (
    <div className="page-container contact-container">
      <h2 className="contact-title gradient-text">Contact Me</h2>

      <div className="contact-info">
        {/* Contact Card */}
        <div className="contact-box">
          <p>
            <strong>Email:</strong> 
            <a href="mailto:your.email@example.com" className="contact-link">
              odimasharon@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> 
            <a href="tel:+19197033335" className="contact-link">
              +19197033335
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/sharonodima" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="social-icon"/>
          </a>
          <a href="https://github.com/sharonodima" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="social-icon" />
          </a>
          <a href=" https://sharonodima.github.io/myportfolio/" target="_blank" rel="noopener noreferrer">
            <img src={website} alt="Website" className="social-icon" />
          </a>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}> {/* ✪ Added onSubmit */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
            value={formData.name} // ✪ Controlled input
            onChange={handleChange} // ✪ Hook up change
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-input"
            value={formData.email} // ✪ Controlled input
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-textarea"
            value={formData.message} // ✪ Controlled input
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>

        {/* ✪ Feedback message */}
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </div>
  );
}

export default Contact;
