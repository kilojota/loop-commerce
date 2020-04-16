import React from 'react';

import styles from './Searchbar.module.scss';

const Searchbar = () => (
  <div className={styles.searchbar}>
    <input type="text" placeholder="Search" />
    <div className={styles.iconContainer}>
      <i className="fas fa-search"></i>
    </div>
  </div>
);

export default Searchbar;
