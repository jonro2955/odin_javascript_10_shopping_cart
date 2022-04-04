import React, { useState, useEffect, useRef } from 'react';

export default function Card(props) {
  //JS style object: To use, assign this constant to a style attribute of an element
  const myStyle = { backgroundColor: props.name };

  const [count, setCount] = useState(0);

  function plusClickHandler() {
    let num = count;
    num++;
    setCount(num);
  }

  function minusClickHandler() {
    let num = count;
    if (num > 0) num--;
    setCount(num);
  }

  return (
    <div className='card'>
      <h3>Card</h3>
      <span>Name: {props.name}</span>
      <div className='colorBox' style={myStyle}></div>
      <span>Quantity: {count}</span>
      {/* data attributes can only have lowercase letters */}
      <button data-productname={props.name} onClick={plusClickHandler}>
        +
      </button>
      <button data-productname={props.name} onClick={minusClickHandler}>
        -
      </button>
      <button data-productname={props.name} onClick={props.addClickHandler}>
        Add
      </button>
    </div>
  );
}
