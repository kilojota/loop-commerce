import React from 'react';
import { useIntl } from 'react-intl';

import Label from 'components/auth/Label';
import ForgotPassword from 'components/auth/ForgotPassword';

import styles from 'components/auth/AuthStyles.module.scss';

const ForgotPasswordPage = () => {
  const intl = useIntl();

  return (
    <div className={styles.auth}>
      <div className={styles.authWrapper}>
        <div className={styles.authContainer}>
          <ForgotPassword />
        </div>
        <Label linkText={intl.messages['common.returnLogin']} className={styles.authLabel} linkUrl={'/sign-in'} />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
