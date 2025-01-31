import React from 'react';
import './Theme.css'; // Make sure the CSS file is properly linked
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link className="gradient-text" to="/">Home</Link></li>
        <li><Link className="gradient-text" to="/about">About</Link></li>
        <li><Link className="gradient-text" to="/projects">Projects</Link></li>
        <li><Link className="gradient-text" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
