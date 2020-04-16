import React from 'react';

import SignIn from '../auth/SignIn';
import Label from '../auth/Label';
const SignInPage = () => (
  <div className='auth'>
    <div className='auth__wrapper'>
      <div className='auth__container'>
        <SignIn />
      </div>
      <Label text={"Don't have an account?"} linkText={'Create one here'} className={'auth__label'} linkUrl={'/sign-up'} />
    </div>
  </div>
);

export default SignInPage;
