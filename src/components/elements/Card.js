import React, { useState, useEffect, useRef } from 'react';

export default function Card(props) {
  //JS style object: To use, assign this constant to a style attribute of an element
  const myStyle = { backgroundColor: props.name };

  const [count, setCount] = useState(0);

  function plusClickCallBack() {
    let num = count;
    num++;
    setCount(num);
  }

  function minusClickCallBack() {
    let num = count;
    if (num > 0) num--;
    setCount(num);
  }


  return (
    <div className='card'>
      <h3>Card</h3>
      <span>Name: {props.name}</span>
      <div className='colorBox' style={myStyle}></div>
      <span>
        <label>Quantity:</label>
        <input
          type='number'
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
      </span>
      {/* data attributes can only have lowercase letters */}
      <button onClick={plusClickCallBack}>+</button>
      <button onClick={minusClickCallBack}>-</button>
      <button
        data-name={props.name}
        data-count={count}
        onClick={props.addBtnClickHandler}
      >
        Add
      </button>
    </div>
  );
}
