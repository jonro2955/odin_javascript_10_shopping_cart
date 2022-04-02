// import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id='homepage'>
      <h1> Welcome to Spectrum </h1>
      <div>We the hue you're looking for.</div>
      <Link id='shopBtn' to='/shop'>
        Shop
      </Link>
    </div>
  );
}
