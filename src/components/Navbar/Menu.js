import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { signOut } from 'actions/authActions';

import Button from './Button';

import styles from './Menu.module.scss';

const Menu = ({ isAuthenticated, redirectTo, signOut }) => {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className={styles.menu}>
      {isAuthenticated ? (
        <>
          <Button formattedMessageId='common.accountSettings' onClick={() => redirectTo('/settings')} />
          <Button formattedMessageId='common.signOut' onClick={handleSignOut} />
        </>
      ) : (
        <>
          <Button formattedMessageId='common.signIn' onClick={() => redirectTo('/sign-in')} />
          <Button formattedMessageId='common.signUp' onClick={() => redirectTo('/sign-up')} />
        </>
      )}
    </div>
  );
};

Menu.propTypes = {
  isAuthenticated: PropTypes.bool,
  redirectTo: PropTypes.func,
};

Menu.defaultProps = {
  isAuthenticated: false,
  redirectTo: () => {},
};

export default connect(null, { signOut })(Menu);
