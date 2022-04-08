// import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div id='homepage' className='container'>
      <div id='shopHeadingDiv'>
        <h1>Welcome to Spectrum</h1>
        <Link className='cartBtn' to='/cart'>
          {props.cartCount}
        </Link>
      </div>
      <h3>We the hue you're looking for.</h3>
      <Link id='shopBtn' to='/shop'>
        Shop
      </Link>
    </div>
  );
}
