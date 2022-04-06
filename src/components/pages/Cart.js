import CartEntry from '../elements/CartEntry';
import { Link } from 'react-router-dom';

export default function Cart(props) {
  return (
    <div id='cartPage'>
      <h1> Cart </h1>
      <div id='productsBox'>
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
          }
        })}
      </div>
      <h1>Total Items: {props.cartCount}</h1>
      <h1>
        Total Amount: {props.orderTotal > 0 ? '$' + props.orderTotal : ''}
      </h1>
      <button id='checkoutBtn'>
        <Link to='/checkout'>Checkout</Link>{' '}
      </button>
    </div>
  );
}
