import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import {
  SIGN_IN,
  SIGN_UP,
  SIGN_IN_FAILED,
  SIGN_UP_FAILED,
  SIGN_OUT,
  SET_LOADING,
  UNSET_LOADING,
  CLEAR_ERRORS
} from 'actions/types'

const initialState = {
  user: null,
  userSession: null,
  errors: null,
  loading: false
}

const authPersistConfig = {
  storage,
  key: 'auth'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        userSession: action.payload.userSession,
        errors: null
      }

    case SIGN_UP:
      return {
        ...state,
        user: action.payload.user,
        userSession: action.payload.userSession,
        errors: null
      }
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        userSession: null,
        errors: null
      }

    case SIGN_UP_FAILED:
    case SIGN_IN_FAILED:
      return {
        ...state,
        user: null,
        userSession: null,
        errors: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        errors: null
      }
    case UNSET_LOADING:
      return {
        ...state,
        loading: false
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
        loading: false
      }
    default: {
      return state
    }
  }
}

export default persistReducer(authPersistConfig, reducer)
