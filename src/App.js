// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Header from './components/Header'; // Shared Header component
import FloatingPics from './components/FloatingPics'; // New FloatingPics component
import "./Theme.css";

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      'div',
      null,
      // Global header
      React.createElement(Header, null),
      // Navigation bar
      React.createElement(Navbar, null),
      // Define routes for the app
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/', element: React.createElement(Welcome, null) }),
        React.createElement(Route, { path: '/about', element: React.createElement(About, null) }),
        React.createElement(Route, { path: '/projects', element: React.createElement(Projects, null) }),
        React.createElement(Route, { path: '/contact', element: React.createElement(Contact, null) })
      ),
      // Floating pictures that appear on every page
      React.createElement(FloatingPics, null)
    )
  );
}

export default App;
