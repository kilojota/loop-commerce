import React from 'react';
import { Link } from 'react-router-dom';
const Label = ({ text, linkText,linkUrl, className }) => {
  return (
    <label className={className}>
      <span>{text}</span>
      <Link to={linkUrl}>
        <span className='link'>{linkText}</span>
      </Link>
    </label>
  );
};

export default Label;
