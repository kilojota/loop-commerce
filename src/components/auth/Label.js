import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './AuthStyles.module.scss'

const Label = ({ text, linkText, linkUrl, className }) => {
  return (
    <label className={className}>
      {text && <span>{text}</span>}
      {linkText && (
        <Link to={linkUrl}>
          {' '}
          <span className='link'>{linkText}</span>
        </Link>
      )}
    </label>
  )
}
Label.defaultProps = {
  text: '',
  linkText: '',
  linkUrl: '',
  className: styles.authLabel
}
Label.propTypes = {
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}
export default Label
