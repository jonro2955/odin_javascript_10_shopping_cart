import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <a href='/'>Logo</a>
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
