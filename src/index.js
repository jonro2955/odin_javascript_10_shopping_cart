import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css';

// Create a ReactDOMClient root as per React 18 (https://github.com/reactwg/react-18/discussions/5)
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
