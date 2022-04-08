import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../elements/ProductCard';

export default function Shop(props) {

  return (
    <div id='shopPage' className='container'>
      <div id='shopHeadingDiv'>
        <h1> Shop </h1>
        <Link className='cartBtn' to='/cart'>
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
