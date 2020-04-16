import {
  SIGN_IN,
  SIGN_UP,
  SIGN_IN_FAILED,
  SIGN_UP_FAILED,
  SIGN_OUT
} from './types'
import AuthService from '../api/AuthService'

export const signIn = credentials => async dispatch => {
  try {
    const res = await AuthService.signIn(credentials)
    const { data, headers } = res
    const user = data.user
    const { client, uid, 'access-token': accessToken } = headers
    const userSession = { client, uid, 'access-token': accessToken }
    const payload = { user, userSession }

    dispatch({ type: SIGN_IN, payload })
  } catch (err) {
    dispatch({ type: SIGN_IN_FAILED, payload: err.errors })
  }
}
export const signUp = user => async dispatch => {
  try {
    const res = await AuthService.signUp(user)
    const { data, headers } = res
    const newUser = data.user
    const { client, uid, 'access-token': accessToken } = headers
    const userSession = { client, uid, 'access-token': accessToken }
    const payload = { user: newUser, userSession }

    dispatch({ type: SIGN_UP, payload })
  } catch (err) {
    dispatch({ type: SIGN_UP_FAILED, payload: err.errors })
  }
}
export const signOut = () => async dispatch => {
  dispatch({
    type: SIGN_OUT
  })
}
