import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { useIntl } from 'react-intl'
import { Redirect, useLocation } from 'react-router-dom'
import { signIn, clearErrors } from 'actions/authActions'
import { useAuthentication } from 'hooks/auth'
import Logo from './Logo'
import InputForm from './InputForm'
import ErrorMessage from 'components/messages/ErrorMessage'
import styles from './AuthStyles.module.scss'

const SignIn = ({ signIn, clearErrors, errorsRequest, loading }) => {
  useEffect(() => {
    clearErrors()
  }, [clearErrors])
  const { register, errors, handleSubmit } = useForm()
  const intl = useIntl()
  const { state } = useLocation()
  const { from } = state || { from: { pathname: '/' } }
  const { isAuthenticated } = useAuthentication()
  if (isAuthenticated) {
    return <Redirect to={from} />
  }

  const onSubmit = async data => {
    await signIn(data)
  }

  return (
    <>
      <Logo authType={'signIn'} />
      <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: intl.messages['common.emailValid']
            }
          })}
          name='email'
          label={intl.messages['common.email']}
          value=''
          placeholder={intl.messages['common.emailPlaceholder']}
          errors={errors}
        />
        <InputForm
          ref={register({ required: true, minLength: 8 })}
          name='password'
          label={intl.messages['common.password']}
          value=''
          type='password'
          placeholder={intl.messages['common.passwordPlaceholder']}
          errors={errors}
          helpLinkPath={'/forgot-password'}
          helpMessage={intl.messages['common.forgotPassword']}
        />
        {errorsRequest && <ErrorMessage msgs={errorsRequest} />}

        <button
          className={`${styles.authButton} ${loading ? 'disabled' : ''}`}
          type='submit'
        >
          <span>{intl.messages['common.login']}</span>
        </button>
      </form>
    </>
  )
}
const mapStateToProps = state => ({
  errorsRequest: state.auth.errors,
  loading: state.auth.loading
})
export default connect(mapStateToProps, { signIn, clearErrors })(SignIn)
