import React from 'react'
import { useIntl } from 'react-intl'
import SignIn from 'components/auth/SignIn'
import Label from 'components/auth/Label'
import styles from 'components/auth/AuthStyles.module.scss'

const SignInPage = () => {
  const intl = useIntl()

  return (
    <div className={styles.auth}>
      <div className={styles.authWrapper}>
        <div className={styles.authContainer}>
          <SignIn />
        </div>
        <Label
          text={intl.messages['common.dontHaveAccountQuestion']}
          linkText={intl.messages['common.createAccount']}
          className={styles.authLabel}
          linkUrl={'/sign-up'}
        />
      </div>
    </div>
  )
}

export default SignInPage
