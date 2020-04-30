import React from 'react';

import Logo from './Logo';
import Searchbar from './Searchbar';
import ButtonGroup from './ButtonGroup';

import styles from './Navbar.module.scss';

const Navbar = () => (
  <navbar className={styles.navbar}>
    <div className={styles.navbarContent}>
      <Logo />
      <Searchbar />
      <ButtonGroup />
    </div>
  </navbar>
);

export default Navbar;
