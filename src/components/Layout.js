// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Ensure you're using react-router-dom for routing
import FloatingPics from './FloatingPics';

function Layout() {
  return React.createElement(
    'div',
    null,
    // Header
    React.createElement(
      'header',
      null,
      // You can add your header or navbar elements here
      React.createElement('h1', null, 'My Website Header')
    ),
    // Main content (page-specific content will be rendered here)
    React.createElement(
      'main',
      null,
      React.createElement(Outlet, null)
    ),
    // Floating Pictures Component (appears on every page)
    React.createElement(FloatingPics, null),
    // Footer
    React.createElement(
      'footer',
      null,
      React.createElement('p', null, 'My Website Footer')
    )
  );
}

export default Layout;
