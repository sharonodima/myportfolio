import React from 'react';
import './Theme.css';

function Contact() {
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
            <a href="tel:+1234567890" className="contact-link">
              +19197033335
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/sharonodima" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.jpeg" alt="LinkedIn" className="social-icon"/>
          </a>
          <a href="https://github.com/sharonodima" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.png" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://sharon-odima-react-website.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/website.png" alt="Website" className="social-icon" />
          </a>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" className="form-input" required />
          <input type="email" name="email" placeholder="Your Email" className="form-input" required />
          <textarea name="message" placeholder="Your Message" className="form-textarea" required></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
