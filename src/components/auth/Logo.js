import React from 'react';
import PropTypes from 'prop-types';

import styles from './AuthStyles.module.scss';

const Logo = ({ logoImgPath, textLogoPath, authType }) => {
  return (
    <div className={`${styles.authLogo} ${authType === 'signIn' && styles.pdBottom}`}>
      <img src={logoImgPath} alt='logo' className={styles.authLogoTextImg} />
      <img src={textLogoPath} alt='logo text' className={styles.authLogoImg} />
    </div>
  );
};

Logo.defaultProps = {
  authType: 'signIn',
  logoImgPath: 'main-logo.png',
  textLogoPath: 'text-logo.png',
};

Logo.propTypes = {
  authType: PropTypes.string.isRequired,
  logoImgPath: PropTypes.string.isRequired,
  textLogoPath: PropTypes.string.isRequired,
};

export default Logo;
