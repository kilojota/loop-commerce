import React, { createRef, useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { signUp } from '../../actions/authActions'
import Logo from './Logo'
import { useAuthentication } from '../../hooks/auth'

import InputForm from './InputForm'
import SelectForm from './SelectForm'

const SignUp = ({ signUp }) => {
  const emailRef = createRef()
  const firstNameRef = createRef()
  const lastNameRef = createRef()
  const genderRef = createRef()
  const addressRef = createRef()
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
      await signUp({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        gender: genderRef.current.value,
        address: addressRef.current.value
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
          isRequired
        />
        <InputForm
          ref={firstNameRef}
          name='firstname'
          label='First Name'
          value=''
          type='text'
          placeholder='John'
          isRequired
        />
        <InputForm
          ref={lastNameRef}
          name='lastname'
          label='Last Name'
          value=''
          type='text'
          placeholder='Doe'
          isRequired
        />
        <SelectForm
          ref={genderRef}
          name='gender'
          label='Gender'
          value=''
          selectValues={[
            { value: 'placeholder', isDefault: true },
            { value: 'male' },
            { value: 'female' }
          ]}
        />
        <InputForm
          ref={addressRef}
          name='address'
          label='Address'
          value=''
          type='text'
          placeholder='123 fake street'
        />
        <InputForm
          ref={passwordRef}
          name='password'
          label='Password'
          value=''
          type='password'
          placeholder='Type your password'
          isRequired
        />
      </div>
      <button className='auth__button' onClick={onClick}>
        <span>Sign Up</span>
      </button>
    </>
  )
}

export default connect(null, { signUp })(SignUp)
