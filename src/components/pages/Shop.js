import React, { useState, useEffect, useRef } from 'react';
import productsJson from '/home/pc/TOP/Projects/2_Full_Stack_JavaScript/odin_javascript_10_shopping_cart/src/products.json';
import Card from '../elements/Card';

export default function Shop() {
  const [data, setData] = useState(productsJson);

  return (
    <div id='shopPage'>
      <h1> Shop </h1>
      <div id='productsBox'>
        {data.map((prod, i) => (
          <Card
            key={i}
            name={prod.name}
            color={prod.color}
            quantity={prod.quantity}
            clickHandler={clickCallback}
          />
        ))}
      </div>
    </div>
  );
}

const clickCallback = () => {
  console.log('click');
  //use setData to increment the quantity of the clicked data item
};
