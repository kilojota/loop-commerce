import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ logoImgPath, textLogoPath }) => {
  return (
    <div className='auth__logo'>
      <img src={logoImgPath} alt='logo' className='auth__logo__text-img' />
      <img src={textLogoPath} alt='logo-text' className='auth__logo__img' />
    </div>
  );
};

Logo.defaultProps = {
  logoImgPath: 'main-logo.png',
  textLogoPath: 'text-logo.png',
};

Logo.propTypes = {
  logoImgPath: PropTypes.string.isRequired,
  textLogoPath: PropTypes.string.isRequired,
};

export default Logo;
