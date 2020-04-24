import { GET_PRODUCTS, CLEAR_ERRORS } from 'actions/types'

const initialState = {
  products: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}
