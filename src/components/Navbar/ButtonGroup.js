import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import { Link, useHistory } from 'react-router-dom';
import { useAuthentication } from 'hooks/auth';

import Menu from './Menu';

import styles from './ButtonGroup.module.scss';

const ButtonGroup = () => {
  const history = useHistory();
  const handleRedirectTo = (path) => history.push(path);
  const { isAuthenticated } = useAuthentication();
  const [showingMenu, setShowingMenu] = useState(false);
  const intl = useIntl();

  return (
    <div className={styles.buttonGroup}>
      {isAuthenticated ? (
        <>
          {showingMenu && <Menu isAuthenticated={isAuthenticated} redirectTo={handleRedirectTo} />}

          <div className={styles.myAccount} onClick={() => setShowingMenu(!showingMenu)}>
            <i className='fas fa-user'></i>
            <span>{intl.messages['common.myAccount']}</span>
          </div>
        </>
      ) : (
        <div className={styles.authGroup}>
          <Link to='sign-in'>
            <button className={styles.loginButton}>
              <span>{intl.messages['common.login']}</span>
            </button>
          </Link>
          <Link to='sign-up'>
            <button className={styles.signupButton}>
              <span>{intl.messages['common.signUp']}</span>
            </button>
          </Link>
        </div>
      )}

      <button className={styles.mycartButton}>
        <span>{intl.messages['common.myCart']}</span>

        <span className={styles.numberLabel}>4</span>
      </button>
    </div>
  );
};

export default ButtonGroup;
