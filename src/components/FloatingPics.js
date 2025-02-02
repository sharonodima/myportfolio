// FloatingPics.js
import React from 'react';
import HTML from '../HTML.png';
import css from '../css.png';
import javascript from '../Javascript.png';
import node from '../Node.png';
import reactPic from '../ReactPic.png';
import './Theme.css'; // Ensure your CSS file (with floating pics styles) is imported

function FloatingPics() {
  return React.createElement(
    'div',
    { className: 'floating-pics-container' },
    React.createElement('img', {
      src: HTML, // Replace with your image path
      alt: 'Floating Pic 1',
      className: 'floating-pic'
    }),
    React.createElement('img', {
      src: css,
      alt: 'Floating Pic 2',
      className: 'floating-pic'
    }),
    React.createElement('img', {
      src: javascript,
      alt: 'Floating Pic 3',
      className: 'floating-pic'
    }),
    React.createElement('img', {
      src:node,
      alt: 'Floating Pic 4',
      className: 'floating-pic'
    }),
    React.createElement('img', {
      src: reactPic,
      alt: 'Floating Pic 5',
      className: 'floating-pic'
    })
  );
}

export default FloatingPics;
