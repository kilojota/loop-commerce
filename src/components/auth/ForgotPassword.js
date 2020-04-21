import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'
import {
  clearErrors,
  unsetLoading,
  setLoading
} from '../../actions/authActions'
import { useAuthentication } from '../../hooks/auth'
import { useIntl } from 'react-intl'
import InputForm from './InputForm'
import { useForm } from 'react-hook-form'
import styles from './AuthStyles.module.scss'
import ErrorMessage from '../messages/ErrorMessage'
import SuccessMessage from '../messages/SuccessMessage'
import AuthService from '../../api/AuthService'
const ForgotPassword = ({ clearErrors, setLoading, loading, unsetLoading }) => {
  useEffect(() => {
    clearErrors()
  }, [])
  let { register, errors, handleSubmit } = useForm()
  const [isResponseSuccess, setIsResponseSuccess] = useState(false)
  const [errorList, setErrorList] = useState(false)

  const intl = useIntl()
  const { state } = useLocation()
  const { from } = state || { from: { pathname: '/' } }
  const { isAuthenticated } = useAuthentication()
  if (isAuthenticated) {
    return <Redirect to={from} />
  }
  const onSubmit = async ({ email }) => {
    setLoading()
    setIsResponseSuccess(false)
    try {
      await AuthService.resetPassword({ email })
      setIsResponseSuccess(true)
    } catch ({ errors }) {
      setErrorList(errors)
    }
    unsetLoading()
  }

  return (
    <>
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
        {errorList && <ErrorMessage msgs={errorList} />}
        {isResponseSuccess && (
          <SuccessMessage
            msgs={[intl.messages['common.resetPasswordSuccess']]}
          />
        )}
        <button
          className={`${styles.authButton} ${loading ? 'disabled' : ''}`}
          type='submit'
        >
          <span>{intl.messages['common.emailNewPassword']}</span>
        </button>
      </form>
    </>
  )
}
const mapStateToProps = state => ({
  loading: state.auth.loading
})
export default connect(mapStateToProps, {
  clearErrors,
  setLoading,
  unsetLoading
})(ForgotPassword)
