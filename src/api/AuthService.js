import axiosClient from './httpClient'
class AuthService {
  static signUp = user => axiosClient().post('/api/v1/auth', { ...user })

  static signIn = credentials =>
    axiosClient().post('/api/v1/auth/sign_in', { ...credentials })

  static signOut = () => axiosClient().delete('/api/v1/auth/sign_out')

  static resetPassword = email =>
    axiosClient().post('/api/v1/auth/password', email)

  static updatePassword = password =>
    axiosClient().put('/api/v1/auth/password', { password })
}

export default AuthService
