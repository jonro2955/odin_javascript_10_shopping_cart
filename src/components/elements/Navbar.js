import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className='nav-wrapper'>
      <div className='container'>
        <Link
          className='brand-logo left'
          id='logo'
          to='/'
        ></Link>
        <ul className='right'>
          <li>
            <Link to='/'>Home</Link>
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
