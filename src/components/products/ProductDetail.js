import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, withRouter } from 'react-router-dom';

import styles from './Products.module.scss';

const ProductDetail = ({ history, products }) => {
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const productId = location.pathname.split('/')[location.pathname.split('/').length - 1];

  useEffect(() => {
    if (!products) {
      history.push('/');
    } else {
      const product = products.filter((prod) => prod.id == productId);
      setProduct(product[0]);
    }
  }, [history, productId, products]);

  return (
    <>
      {product && (
        <div className='main'>
          <div className={styles.productDetailContainer}>
            <div className={styles.imgContainer}>
              <img alt={product.name} src='/product1.png' />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>{product.name}</p>
              <p className={styles.productPrice}>
                <span className={styles.priceSpan}>${product.price}</span>
                <span className={styles.perUnit}>/ per unit</span>
              </p>
              <p className={styles.productDesc}>{product.description}</p>
              <p>Quantity</p>
              <div className={styles.navigation}>
                <div className={styles.navigationContainer}>
                  <div className={`${styles.navigationNumberContainer} ${styles.navigationPreviousNumber}`}>
                    <span>{'-'} </span>
                  </div>

                  <div className={`${styles.navigationNumberContainer} ${styles.isActive}`}>
                    <span className={styles.navigationNumber}>{1}</span>
                  </div>

                  <div className={`${styles.navigationNumberContainer} ${styles.navigationNextNumber}`}>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state, props) => ({
  products: state.products.products,
  history: props.history,
});
export default withRouter(connect(mapStateToProps)(ProductDetail));
