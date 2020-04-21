import React, { useState, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'
import { clearErrors, unsetLoading, setLoading } from 'actions/authActions'
import { useAuthentication } from 'hooks/auth'
import ErrorMessage from 'components/messages/ErrorMessage'
import SuccessMessage from 'components/messages/SuccessMessage'
import InputForm from './InputForm'
import Title from './Title'
import AuthService from 'api/AuthService'
import styles from './AuthStyles.module.scss'

const ForgotPassword = ({ clearErrors, setLoading, loading, unsetLoading }) => {
  let { register, errors, handleSubmit } = useForm()
  const [isResponseSuccess, setIsResponseSuccess] = useState(false)
  const [errorList, setErrorList] = useState(false)
  const intl = useIntl()
  const { state } = useLocation()
  const { from } = state || { from: { pathname: '/' } }
  const { isAuthenticated } = useAuthentication()

  useEffect(() => {
    clearErrors()
  }, [clearErrors])

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
      <Title
        title={intl.messages['common.forgotYourPassword']}
        subtitle={intl.messages['common.forgotPasswordLegend']}
      />
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
