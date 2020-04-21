import React from 'react'
import PropTypes from 'prop-types'
import styles from './AuthStyles.module.scss'

const Title = ({ title, subtitle }) => {
  return (
    <>
      <div className={styles.resetPasswordTitle}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
    </>
  )
}

Title.defaultProps = {
  title: '',
  subtitle: ''
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default Title
