import { GET_PRODUCTS, CLEAR_ERRORS, SET_PRODUCTS_LOADING, UNSET_PRODUCTS_LOADING } from 'actions/types';

const initialState = {
  products: null,
  totalPages: 0,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        totalPages: Number(action.payload.totalPages),
        loading: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UNSET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
