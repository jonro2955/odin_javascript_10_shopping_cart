import { Link } from 'react-router-dom';

export default function Checkout(props) {
  return (
    <div id='shopPage' className='container'>
      <div id='shopHeadingDiv'>
        <h1>Checkout</h1>
        <Link className='cartBtn' to='/cart'>
          {props.cartCount}
        </Link>
      </div>
      <h1>This page is left intentionally blank</h1>
    </div>
  );
}
