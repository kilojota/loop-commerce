import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Products.module.scss';

const Products = ({ price, name, desc, id }) => {
  return (
    <div className={styles.arrivalsProduct}>
      <div className={styles.arrivalsProductImgContainer}>
        <img alt={name} src='product1.png' />
      </div>
      <div className={styles.arrivalsProductCombo}>
        <span className={styles.arrivalsProductTitle}>
          <Link to={`/products/${id}`}>{name}</Link>
        </span>
        <span className={styles.arrivalsProductPrice}>${price}</span>
      </div>
      <div className={styles.btnAddCartContainer}>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Products;
