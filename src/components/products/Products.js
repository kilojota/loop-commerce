import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getProducts } from 'actions/productsActions';

import ProductItem from 'components/products/ProductItem';
import Spinner from 'components/home/Spinner';

import styles from './Products.module.scss';

const Products = ({ loading, products }) => {
  return (
    <div className={styles.arrivals}>
      <h1>New Arrivals</h1>
      {!loading ? (
        <div className={styles.arrivalsProducts}>
          {products.map((product) => (
            <ProductItem key={product.id} id={product.id} price={product.price} name={product.name} desc={product.description} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  totalPages: state.products.totalPages,
});
export default connect(mapStateToProps, { getProducts })(Products);
