import { GET_PRODUCTS, SET_PRODUCTS_LOADING, UNSET_PRODUCTS_LOADING, CLEAR_PRODUCTS } from 'actions/types';
import ProductsService from 'api/ProductsService';

export const getProducts = (pageNumber) => async (dispatch) => {
  try {
    const res = await ProductsService.getProducts(pageNumber);
    dispatch({ type: GET_PRODUCTS, payload: { products: res.data.products, totalPages: res.headers['total-pages'] } });
  } catch (err) {
    dispatch({ type: CLEAR_PRODUCTS, payload: [] });
  }
};

export const setLoading = () => async (dispatch) => {
  dispatch({ type: SET_PRODUCTS_LOADING });
};

export const unsetLoading = () => async (dispatch) => {
  dispatch({ type: UNSET_PRODUCTS_LOADING });
};
