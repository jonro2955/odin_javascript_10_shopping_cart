import React from 'react';
import ReactDOMClient from 'react-dom/client';

import './index.css';
//Must run 'npm i react-router-dom' before using router:
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Navbar from './components/elements/Navbar';

// Create a root as per React 18 (https://github.com/reactwg/react-18/discussions/5)
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
