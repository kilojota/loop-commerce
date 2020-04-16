import React from 'react'

import SignUp from '../../components/auth/SignUp'
import Label from '../auth/Label'
const SignUpPage = () => (
  <div className='auth'>
    <div className='auth__wrapper'>
      <div className='auth__container'>
        <SignUp />
      </div>
      <Label
        text={"Already have an account?"}
        linkText={'Sign In'}
        className={'auth__label'}
        linkUrl={'/sign-in'}
      />
    </div>
  </div>
)

export default SignUpPage
