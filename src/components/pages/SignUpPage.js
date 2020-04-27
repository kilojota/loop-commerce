import React from 'react';
import { useIntl } from 'react-intl';

import Label from 'components/auth/Label';
import SignUp from 'components/auth/SignUp';

import styles from 'components/auth/AuthStyles.module.scss';

const SignUpPage = () => {
  const intl = useIntl();

  return (
    <div className={styles.auth}>
      <div className={styles.authWrapper}>
        <div className={styles.authContainer}>
          <SignUp />
        </div>
        <Label text={intl.messages['signUp.alreadyHaveAnAccount']} linkText={intl.messages['signIn.signIn']} className={styles.authLabel} linkUrl={'/sign-in'} />
      </div>
    </div>
  );
};
export default SignUpPage;
