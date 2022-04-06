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
      <h1>
        The checkout feature is not going to be implemented for this project.
      </h1>
    </div>
  );
}
