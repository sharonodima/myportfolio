import React from 'react';

function Navbar({ scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }) {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <button className="nav-button gradient-text glow" onClick={scrollToHome}>Home</button>
        </li>
        <li>
          <button className="nav-button gradient-text glow" onClick={scrollToAbout}>About</button>
        </li>
        <li>
          <button className="nav-button gradient-text glow" onClick={scrollToProjects}>Projects</button>
        </li>
        <li>
          <button className="nav-button gradient-text glow" onClick={scrollToContact}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
