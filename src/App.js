import React, { useState, useEffect, useRef } from 'react';
//Must run 'npm i react-router-dom' before you can use router:
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import productsJson from '/home/pc/TOP/Projects/2_Full_Stack_JavaScript/odin_javascript_10_shopping_cart/src/products.json';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Navbar from './components/elements/Navbar';

export default function App() {
  /* The following states orderForm and cartCount will be global. 
  They and functions that modify them can be passed down as props to 
  child components <Shop/> and <Cart/> so that they both use the same 
  info to display to the user, and anything changed in one component is 
  also changed in the other*/
  const [orderForm, setOrderForm] = useState(productsJson);
  const [cartCount, setCartCount] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);

  function incrementItem(event) {
    const name = event.target.dataset.name;
    let tempForm = orderForm;
    let tmpCartCount = cartCount;
    tempForm.find((it) => {
      return it.name === name;
    }).quantity++;
    tmpCartCount++;
    setOrderForm(tempForm);
    setCartCount(tmpCartCount);
    console.log(orderForm);
  }

  function decrementItem(event) {
    const name = event.target.dataset.name;
    let tempForm = orderForm;
    let tmpCartCount = cartCount;
    tempForm.find((it) => {
      return it.name === name;
    }).quantity--;
    tmpCartCount--;
    setOrderForm(tempForm);
    setCartCount(tmpCartCount);
    console.log(orderForm);
  }

  function deleteItem(event) {
    const name = event.target.dataset.name;
    let tempForm = orderForm;
    let tmpCartCount = cartCount;
    let deleteCount;
    tempForm.forEach((item) => {
      if (item.name === name) {
        deleteCount = item.quantity;
        item.quantity = 0;
      }
    });
    setOrderForm(tempForm);
    setCartCount(tmpCartCount - deleteCount);
    console.log(orderForm);
  }

  function updateOrder(event) {
    const name = event.target.dataset.name;
    const quantity = Number(event.target.dataset.count);
    let tempForm = orderForm;
    let tmpCartCount = 0;
    tempForm.forEach((item) => {
      if (item.name === name) {
        item.quantity += quantity;
      }
      tmpCartCount += Number(item.quantity);
    });
    setOrderForm(tempForm);
    setCartCount(tmpCartCount);
  }

  useEffect(() => {
    let tempAmount = 0;
    orderForm.forEach((item) => {
      tempAmount += item.price * item.quantity;
    });
    setOrderTotal(tempAmount);
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home cartCount={cartCount} />} />
        <Route
          path='/shop'
          element={
            <Shop
              orderForm={orderForm}
              cartCount={cartCount}
              updateOrder={updateOrder}
            />
          }
        />
        <Route
          path='/cart'
          element={
            <Cart
              orderForm={orderForm}
              cartCount={cartCount}
              orderTotal={orderTotal}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              deleteItem={deleteItem}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
