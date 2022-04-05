import React, { useState, useEffect, useRef } from 'react';
import productsJson from '/home/pc/TOP/Projects/2_Full_Stack_JavaScript/odin_javascript_10_shopping_cart/src/products.json';
import Card from '../elements/Card';

export default function Shop() {
  //state
  const [orderForm, setOrderForm] = useState(productsJson);

  const updateOrderForm = (event) => {
    const name = event.target.dataset.name;
    const quantity = event.target.dataset.count;
    let tmp = orderForm;
    tmp.forEach((item) => {
      if (item.name === name) {
        item.quantity = quantity;
      }
    });
    setOrderForm(tmp);
    console.log(orderForm);
  };

  return (
    <div id='shopPage'>
      <h1> Shop </h1>
      <div id='productsBox'>
        {orderForm.map((prod, i) => (
          <Card
            key={i}
            name={prod.name}
            color={prod.color}
            addBtnClickHandler={updateOrderForm}
          />
        ))}
      </div>
    </div>
  );
}
