import CartEntry from '../elements/CartEntry';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Cart(props) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(props.orderTotal);
  }, [props.orderTotal]);

  return (
    <div id='cartPage' className='container'>
      <h1> Cart </h1>
      <div id='cartBox'>
        {props.orderForm.map((prod, i) => {
          if (prod.quantity > 0) {
            return (
              <CartEntry
                key={i}
                name={prod.name}
                quantity={prod.quantity}
                price={prod.price}
                incrementItem={props.incrementItem}
                decrementItem={props.decrementItem}
                deleteItem={props.deleteItem}
              />
            );
          } else {
            return '';
          }
        })}
      </div>
      <h1>Total Items: {props.cartCount}</h1>
      <h1>Total Amount: {total.toFixed(2)}</h1>
      <button className='btn-large waves-light red'>
        <Link to='/checkout'>Checkout</Link>{' '}
      </button>
    </div>
  );
}
