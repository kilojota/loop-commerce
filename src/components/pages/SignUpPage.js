import React from 'react'

import SignUp from '../../components/auth/SignUp'
import Label from '../auth/Label'
import { useIntl } from 'react-intl'
import styles from '../auth/AuthStyles.module.scss'
const SignUpPage = () => {
  const intl = useIntl()
  return (
    <div className={styles.auth}>
      <div className={styles.authWrapper}>
        <div className={styles.authContainer}>
          <SignUp />
        </div>
        <Label
          text={intl.messages['common.alreadyHaveAnAccount']}
          linkText={intl.messages['common.signIn']}
          className={styles.authLabel}
          linkUrl={'/sign-in'}
        />
      </div>
    </div>
  )
}
export default SignUpPage
