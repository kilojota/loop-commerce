import React from 'react'

import { useIntl } from 'react-intl'
import SignIn from '../auth/SignIn'
import Label from '../auth/Label'
import styles from '../auth/AuthStyles.module.scss'
import ForgotPassword from '../auth/ForgotPassword'
const ForgotPasswordPage = () => {
  const intl = useIntl()

  return (
    <div className={styles.auth}>
      <div className={styles.authWrapper}>
        <div className={styles.authContainer}>
          <ForgotPassword />
        </div>
        <Label
          linkText={intl.messages['common.returnLogin']}
          className={styles.authLabel}
          linkUrl={'/sign-in'}
        />
      </div>
    </div>
  )
}

export default ForgotPasswordPage
