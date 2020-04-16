import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'
import { signIn } from '../../actions/authActions'
import { useAuthentication } from '../../hooks/auth'
import Logo from './Logo'
import InputForm from './InputForm'

const SignIn = ({ signIn }) => {
  const emailRef = createRef()
  const passwordRef = createRef()
  const { state } = useLocation()
  const { from } = state || { from: { pathname: '/' } }
  const { isAuthenticated } = useAuthentication()
  if (isAuthenticated) {
    return <Redirect to={from} />
  }

  const onClick = async () => {
    if (
      emailRef.current.value.trim() === '' ||
      emailRef.current.value.trim() === ''
    ) {
      console.log('Email and password are required')
    } else {
      await signIn({
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
    }
  }
  return (
    <>
      <Logo />
      <div className='auth__forms'>
        <InputForm
          ref={emailRef}
          name='email'
          label='Email'
          value=''
          type='email'
          placeholder='Type your email'
        />
        <InputForm
          ref={passwordRef}
          name='password'
          label='Password'
          value=''
          type='password'
          placeholder='Type your password'
        />
      </div>
      <button className='auth__button' onClick={onClick}>
        <span>Sign In</span>
      </button>
    </>
  )
}

export default connect(null, { signIn })(SignIn)
