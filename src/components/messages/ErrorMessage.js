import React from 'react'
import PropTypes from 'prop-types'
import styles from 'components/auth/AuthStyles.module.scss'

const ErrorMessage = ({ msgs }) => {
  return (
    <div className={`${styles.errorMsg} ${styles.msg}`}>
      <i className='fas fa-times-circle'></i>
      <div className={styles.msgContainer}>
        {msgs.map(msg => (
          <span key={msg}>{msg}</span>
        ))}
      </div>
    </div>
  )
}

ErrorMessage.defaultProps = {
  msgs: ['There was an error']
}

ErrorMessage.propTypes = {
  msgs: PropTypes.array.isRequired
}

export default ErrorMessage
