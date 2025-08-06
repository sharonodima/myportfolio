import React, { useState } from 'react';

function FlipCard({ frontImage, backText }) {
  const [flipped, setFlipped] = useState(false);

  return React.createElement(
    'div',
    {
      className: `flip-card ${flipped ? 'flipped' : ''}`,
      onClick: () => setFlipped(!flipped),
    },
    flipped
      ? React.createElement('div', { className: 'flip-card-back' }, backText)
      : React.createElement('img', {
          src: frontImage,
          alt: 'Front',
          className: 'flip-card-front',
        })
  );
}

export default FlipCard;
