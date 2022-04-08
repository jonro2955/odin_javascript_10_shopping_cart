import { Link } from 'react-router-dom';

export default function Checkout(props) {
  return (
    <div id='shopPage'>
      <div id='shopHeadingDiv'>
        <h1>Checkout</h1>
        <Link id='cartBtn' to='/cart'>
          {props.cartCount}
        </Link>
      </div>
      <h1>This part is intentionally left blank</h1>
    </div>
  );
}
