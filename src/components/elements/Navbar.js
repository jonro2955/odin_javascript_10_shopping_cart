import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className='nav-wrapper'>
      <div className='container'>
        <Link
          className='brand-logo left'
          id='logo'
          to='/odin_javascript_10_shopping_cart'
        ></Link>
        <ul className='right'>
          <li>
            <Link to='/odin_javascript_10_shopping_cart'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
