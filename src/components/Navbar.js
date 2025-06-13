import React from 'react';
import { Link } from 'react-router-dom';
import './Theme.css'; // Assuming your styles live here

function Navbar({ scrollToContact }) {
  return (
    <nav className="navbar">
      <ul className="navbar-menu"> {/* Use your real class */}
        <li><Link to="/" className="gradient-text">Home</Link></li>
        <li><Link to="/about" className="gradient-text">About</Link></li>
        <li><Link to="/projects" className="gradient-text">Projects</Link></li>
        <li>
          <button onClick={scrollToContact} className="gradient-text nav-button">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;



