// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FloatingPics from './components/FloatingPics';
import "./Theme.css";

function App() {
  return React.createElement(
    Router,
    { basename: "/myportfolio" }, // Add basename for GitHub Pages
    React.createElement(
      'div',
      null,
      React.createElement(Header, null),
      React.createElement(Navbar, null),
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/', element: React.createElement(Welcome, null) }),
        React.createElement(Route, { path: '/about', element: React.createElement(About, null) }),
        React.createElement(Route, { path: '/projects', element: React.createElement(Projects, null) }),
        React.createElement(Route, { path: '/contact', element: React.createElement(Contact, null) })
      ),
      React.createElement(FloatingPics, null)
    )
  );
}

export default App;
