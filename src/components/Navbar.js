import React from 'react';
import './Theme.css';

function Navbar({ scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }) {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <button className="nav-button gradient-text" onClick={scrollToHome}>Home</button>
        </li>
        <li>
          <button className="nav-button gradient-text" onClick={scrollToAbout}>About</button>
        </li>
        <li>
          <button className="nav-button gradient-text" onClick={scrollToProjects}>Projects</button>
        </li>
        <li>
          <button className="nav-button gradient-text" onClick={scrollToContact}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
