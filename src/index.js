import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✨ import this
import App from './App';
import './index.css';
import './custom.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✨ wrap your app in this */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
