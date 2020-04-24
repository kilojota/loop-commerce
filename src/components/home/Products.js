import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProducts } from 'actions/productsActions'
import styles from './Products.module.scss'
const Products = ({ products, getProducts }) => {
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className={styles.arrivals}>
      <h1>New Arrivals</h1>
      <div className={styles.arrivalsProducts}>
        {products &&
          products.map(product => (
            <div key={product.id} className={styles.arrivalsProduct}>
              <div className={styles.arrivalsProductImgContainer}>
                <img src='product1.png' />
              </div>
              <div className={styles.arrivalsProductCombo}>
                <span className='arrivals__product__title'>{product.name}</span>
                <span className={styles.arrivalsProductPrice}>
                  ${product.price}
                </span>
              </div>
              <div className={styles.btnAddCartContainer}>
                <button>ADD TO CART</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products.products
})
export default connect(mapStateToProps, { getProducts })(Products)
