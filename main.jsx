import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './style.css';
import './Aurora.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
