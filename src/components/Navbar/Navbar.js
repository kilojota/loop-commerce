import React from 'react';

import Logo from './Logo';

import Searchbar from './Searchbar';
import ButtonGroup from './ButtonGroup';

const Navbar = () => (
  <navbar className={''}>
    <div className={''}>
      <Logo />
      <Searchbar />
      <ButtonGroup />
    </div>
  </navbar>
);

export default Navbar;
