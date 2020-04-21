import React, { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { connect } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { signUp, clearErrors } from 'actions/authActions'
import { useAuthentication } from 'hooks/auth'
import InputForm from './InputForm'
import Logo from './Logo'
import SelectForm from './SelectForm'
import ErrorMessage from 'components/messages/ErrorMessage'
import styles from './AuthStyles.module.scss'

const SignUp = ({ signUp, clearErrors, errorsRequest, loading }) => {
  useEffect(() => {
    clearErrors()
  }, [clearErrors])
  const intl = useIntl()
  const { register, errors, handleSubmit } = useForm()

  const { state } = useLocation()
  const { from } = state || { from: { pathname: '/' } }
  const { isAuthenticated } = useAuthentication()
  if (isAuthenticated) {
    return <Redirect to={from} />
  }

  const onSubmit = async data => {
    await signUp(data)
  }
  return (
    <>
      <Logo authType={'signUp'} />
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
          type=''
          placeholder={intl.messages['common.emailPlaceholder']}
          isRequired
          errors={errors}
        />
        <InputForm
          ref={register({ required: true })}
          name='firstName'
          label={intl.messages['common.firstName']}
          value=''
          type='text'
          placeholder={intl.messages['common.firstNamePlaceholder']}
          isRequired
          errors={errors}
        />
        <InputForm
          ref={register({ required: true })}
          name='lastName'
          label={intl.messages['common.lastName']}
          value=''
          type='text'
          placeholder={intl.messages['common.lastNamePlaceholder']}
          isRequired
          errors={errors}
        />
        <SelectForm
          ref={register({})}
          name='gender'
          label={intl.messages['common.gender']}
          value=''
          selectValues={[
            { value: 'placeholder', isDefault: true },
            { value: 'male' },
            { value: 'female' }
          ]}
          errors={errors}
        />
        <InputForm
          ref={register}
          name='address'
          label={intl.messages['common.address']}
          value=''
          type='text'
          placeholder={intl.messages['common.addressPlaceholder']}
          errors={errors}
        />
        <InputForm
          ref={register({ required: true, minLength: 8 })}
          name='password'
          label={intl.messages['common.password']}
          value=''
          type='password'
          placeholder={intl.messages['common.passwordPlaceholder']}
          isRequired
          errors={errors}
        />
        {errorsRequest && <ErrorMessage msgs={errorsRequest} />}
        <button
          className={`${styles.authButton} ${loading ? 'disabled' : ''}`}
          type='submit'
        >
          <span>{intl.messages['common.signUp']}</span>
        </button>
      </form>
    </>
  )
}
const mapStateToProps = state => ({
  errorsRequest: state.auth.errors,
  loading: state.auth.loading
})
export default connect(mapStateToProps, { signUp, clearErrors })(SignUp)
