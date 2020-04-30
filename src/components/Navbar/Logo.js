import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to='/'>
    <div>
      <img alt='page logo' src='logo.png' />
    </div>
  </Link>
);

export default Logo;
