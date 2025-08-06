import React, { useEffect, useState } from 'react';
import passport from '../Passport.jpeg'

function Header() {
  const [typedIndex, setTypedIndex] = useState(0);
  const fullText = "MY NAME IS SHARON ODIMA\nAND I'M A SOFTWARE ENGINEER";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedIndex((prev) => prev + 1);
    }, 100); // Typing speed
    return () => clearInterval(typingInterval);
  }, []);

  const typedText = fullText.slice(0, typedIndex);

  return (
    <header className="global-header">
      <h1 className="typewriter glow" 
          style={{
              fontFamily: "cursive",
              textShadow: `
                0 0 5px #facc15,
                0 0 10px #facc15,
                0 0 20px rgb(255, 25, 0),
                0 0 40px orange
              `
          }}>
        {typedText}
      </h1>
      <div className="orbit-container">
        {/* Central Image */}
        <img
          src={passport}
          alt="Portrait"
          className="portrait-photo center-image"
        />
      </div>
    </header>
  );
}

export default Header;



