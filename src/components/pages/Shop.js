import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import productsJson from '/home/pc/TOP/Projects/2_Full_Stack_JavaScript/odin_javascript_10_shopping_cart/src/products.json';
import Card from '../elements/Card';

export default function Shop() {
  //state
  const [orderForm, setOrderForm] = useState(productsJson);
  const [cartCount, setCartCount] = useState(0);

  const updateOrder = (event) => {
    const name = event.target.dataset.name;
    const quantity = event.target.dataset.count;
    let tempForm = orderForm;
    let tmpCount = 0;
    tempForm.forEach((item) => {
      if (item.name === name) {
        item.quantity = quantity;
      }
      tmpCount += Number(item.quantity);
    });
    setOrderForm(tempForm);
    setCartCount(tmpCount);
    console.log(orderForm);
  };

  return (
    <div id='shopPage'>
      <div id='shopHeading'>
        <h1> Shop </h1>
        <Link id='cartBtn' to='/cart'>
          {cartCount}
        </Link>
      </div>
      <div id='productsBox'>
        {orderForm.map((prod, i) => (
          <Card
            key={i}
            name={prod.name}
            color={prod.color}
            addBtnClickHandler={updateOrder}
          />
        ))}
      </div>
    </div>
  );
}
