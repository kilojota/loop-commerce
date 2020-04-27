import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/auth/AuthStyles.module.scss';

const SuccessMessage = ({ msgs }) => {
  return (
    <div className={`${styles.successMsg} ${styles.msg}`}>
      <i className='fas fa-check-circle'></i>
      <div className={styles.msgContainer}>
        {msgs.map((msg) => (
          <span key={msg}>{msg}</span>
        ))}
      </div>
    </div>
  );
};

SuccessMessage.defaultProps = {
  msgs: ['Success!'],
};

SuccessMessage.propTypes = {
  msgs: PropTypes.array.isRequired,
};

export default SuccessMessage;
