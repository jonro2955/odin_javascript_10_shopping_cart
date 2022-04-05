import React, { useState, useEffect, useRef } from 'react';

export default function CartEntry(props) {
  //JS style object: To use, assign this constant to a style attribute of an element
  const myStyle = { backgroundColor: props.name };

  return (
    <div className='card'>
      <h3>{props.name.toUpperCase()}</h3>
      <div className='colorBox' style={myStyle}></div>
      <div className='cartInputRow'>
        <div>
          Quantity<div>{props.quantity}</div>
        </div>
        <div id='upDownBtnStack'>
          <button data-name={props.name} onClick={props.incrementItem}>
            +
          </button>
          <button data-name={props.name} onClick={props.decrementItem}>
            -
          </button>
        </div>
      </div>
      <button
        data-name={props.name}
        onClick={props.deleteItem}
      >
        Delete
      </button>
    </div>
  );
}
