import React from 'react'
import PropTypes from 'prop-types'
import BannerItem from './BannerItem'
import styles from './Banner.module.scss'

const Banner = ({ bannerSubTitleText, bannerTitleText, imgPath }) => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        <div className={styles.bannerImgContainer}>
          <img src={imgPath} />
        </div>
        <div className={styles.bannerTitle}>
          {bannerTitleText.map(text => (
            <h1 key={text}>{text}</h1>
          ))}

          <span className={styles.bannerTouchbarText}>
            {bannerSubTitleText}
          </span>
        </div>
      </div>
      <div className={styles.items}>
        <BannerItem
          title={'Reasonable Prices'}
          icon={'fa-dollar-sign'}
          desc={
            'Have you ever finally just gave in to the temptation and read yourhoroscope.'
          }
          color={styles.redBg}
        />
        <BannerItem
          title={'Customer Support'}
          icon={'fa-phone-alt'}
          desc={
            'Have you ever finally just gave in to the temptation and read yourhoroscope.'
          }
          color={styles.blueBg}
        />
        <BannerItem
          title={'Express Delivery'}
          icon={'fa-truck'}
          desc={
            'Have you ever finally just gave in to the temptation and read yourhoroscope.'
          }
          color={styles.greenBg}
        />
      </div>
    </div>
  )
}
Banner.defaultProps = {
  bannerSubTitleText: '',
  bannerTitleText: [],
  imgPath: ''
}
Banner.propTypes = {
  bannerSubTitleText: PropTypes.string.isRequired,
  bannerTitleText: PropTypes.array.isRequired,
  imgPath: PropTypes.string.isRequired
}

export default Banner
