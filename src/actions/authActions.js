import {
  SIGN_IN,
  SIGN_UP,
  SIGN_IN_FAILED,
  SIGN_UP_FAILED,
  SIGN_OUT,
  SET_LOADING,
  UNSET_LOADING,
  CLEAR_ERRORS
} from './types'
import AuthService from '../api/AuthService'

export const signIn = credentials => async dispatch => {
  try {
    dispatch({ type: SET_LOADING })
    const res = await AuthService.signIn(credentials)
    const { data, headers } = res
    const user = data.user
    const { client, uid, 'access-token': accessToken } = headers
    const userSession = { client, uid, 'access-token': accessToken }
    const payload = { user, userSession }

    dispatch({ type: SIGN_IN, payload })
    dispatch({ type: UNSET_LOADING })
  } catch (err) {
    dispatch({ type: SIGN_IN_FAILED, payload: err.errors })
    dispatch({ type: UNSET_LOADING })
  }
}

export const signUp = user => async dispatch => {
  try {
    dispatch({ type: SET_LOADING })

    const res = await AuthService.signUp(user)
    const { data, headers } = res
    const newUser = data.user
    const { client, uid, 'access-token': accessToken } = headers
    const userSession = { client, uid, 'access-token': accessToken }
    const payload = { user: newUser, userSession }

    dispatch({ type: SIGN_UP, payload })
    dispatch({ type: UNSET_LOADING })
  } catch (err) {
    let formattedErrors = err.errors

    if (typeof formattedErrors[0] === 'object') {
      formattedErrors = err.errors[0]
      formattedErrors = Object.entries(formattedErrors).map(val => [
        `${val[0]}: ${val[1]}`
      ])
    }

    dispatch({ type: SIGN_UP_FAILED, payload: formattedErrors })
    dispatch({ type: UNSET_LOADING })
  }
}
export const signOut = () => async dispatch => {
  dispatch({ type: SIGN_OUT })
}

export const setLoading = () => async dispatch => {
  dispatch({ type: SET_LOADING })
}
export const unsetLoading = () => async dispatch => {
  dispatch({ type: UNSET_LOADING })
}
export const clearErrors = () => async dispatch => {
  dispatch({ type: CLEAR_ERRORS })
}
