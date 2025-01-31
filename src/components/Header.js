import React, { useEffect, useState } from 'react';
import './Theme.css';

function Header() {
  const [typedIndex, setTypedIndex] = useState(0);
  const fullText = "MY NAME IS SHARON ODIMA AND I'M A SOFTWARE ENGINEER";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedIndex((prev) => prev + 1);
    }, 100); // Typing speed
    return () => clearInterval(typingInterval);
  }, []);

  const typedText = fullText.slice(0, typedIndex);

  return (
    <header className="global-header">
      <h1 className="typewriter">{typedText}</h1>
      <div className="orbit-container">
        {/* Central Image */}
        <img
          src="public/assets/Portrait.JPG"
          alt="Portrait"
          className="portrait-photo center-image"
        />
      </div>
    </header>
  );
}

export default Header;



