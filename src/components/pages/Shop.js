import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../elements/ProductCard';

/**
 * Must move the states to the parent and use props to alter them so that they are available to
 * sibling "Cart"
 */

export default function Shop(props) {

  return (
    <div id='shopPage'>
      <div id='shopHeadingDiv'>
        <h1> Shop </h1>
        <Link id='cartBtn' to='/cart'>
          {props.cartCount}
        </Link>
      </div>
      <div id='productsBox'>
        {props.orderForm.map((prod, i) => (
          <ProductCard
            key={i}
            name={prod.name}
            quantity={prod.quantity}
            price={prod.price}
            updateOrder={props.updateOrder}
          />
        ))}
      </div>
    </div>
  );
}
