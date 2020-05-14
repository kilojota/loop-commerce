import React from 'react'
import PropTypes from 'prop-types'
import styles from './Banner.module.scss'

const BannerItem = ({ title, desc, icon, color }) => {
  return (
    <div className={styles.item}>
      <div className={`${styles.itemsIcon} ${color}`}>
        <i className={`fas ${icon}`}></i>
      </div>
      <div className={styles.itemsTextContainer}>
        <p className={styles.itemsTitle}>{title}</p>
        <span className={styles.itemsDesc}>{desc}</span>
      </div>
    </div>
  )
}

BannerItem.defaultProps = {
  title: '',
  desc: '',
  icon: '',
  color: ''
}
BannerItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default BannerItem
