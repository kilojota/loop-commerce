import { GET_PRODUCTS } from 'actions/types'
import ProductsService from 'api/ProductsService'

export const getProducts = () => async dispatch => {
  try {
    const res = await ProductsService.getProducts()
    dispatch({ type: GET_PRODUCTS, payload: res.data.products })
  } catch (err) {}
}
