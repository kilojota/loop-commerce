import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { setLoading } from 'actions/productsActions';
import { getProducts } from 'actions/productsActions';

import Banner from './Banner';
import Products from 'components/products/Products';
import Navigation from 'components/home/Navigation';

const Home = ({ products, totalPages, loading, getProducts, setLoading }) => {
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setLoading();
    getProducts(pageNumber);
  }, [pageNumber, getProducts, setLoading]);

  const handlePageChange = (number) => {
    setPageNumber(number);
  };

  return (
    <div className='main'>
      <Banner bannerSubTitleText={'with Touch Bar'} bannerTitleText={['New', 'Macbook Pro!!']} imgPath={'pc.jpg'} />
      <Products loading={loading} products={products} />
      <Navigation pageNumber={pageNumber} totalPages={totalPages} handlePageChange={handlePageChange} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.products.products,
  totalPages: state.products.totalPages,
  loading: state.products.loading,
});

export default connect(mapStateToProps, { getProducts, setLoading })(Home);
