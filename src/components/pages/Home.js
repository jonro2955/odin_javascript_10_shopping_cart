// import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div id='homepage'>
      <div id='shopHeadingDiv'>
        <h1> Welcome to Spectrum </h1>
        <Link id='cartBtn' to='/cart'>
          {props.cartCount}
        </Link>
      </div>
      <div>We the hue you're looking for.</div>
      <Link id='shopBtn' to='/shop'>
        Shop
      </Link>
    </div>
  );
}
