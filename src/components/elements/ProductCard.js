import React, { useState, useEffect, useRef } from 'react';

export default function ProductCard(props) {
  //JS style object: To use, assign this constant to a style attribute of an element
  const myStyle = { backgroundColor: props.name };

  const [count, setCount] = useState(0);

  function incrementCount() {
    let num = count;
    num++;
    setCount(num);
  }

  function decrementCount() {
    let num = count;
    if (num > 0) num--;
    setCount(num);
  }

  return (
    <div className='card'>
      <h3>{props.name.toUpperCase()}</h3>
      <div>Price: ${props.price}</div>
      <div className='colorBox' style={myStyle}></div>
      <div>Quantity:</div>
      <div className='cardInputRow'>
        <input
          id='qInput'
          type='number'
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
        <div id='upDownBtnStack'>
          <button onClick={incrementCount}>+</button>
          <button onClick={decrementCount}>-</button>
        </div>
      </div>
      <button
        data-name={props.name}
        data-count={count}
        onClick={props.updateOrder}
      >
        Add To Cart
      </button>
    </div>
  );
}
