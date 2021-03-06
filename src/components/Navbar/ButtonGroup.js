import React, { useState } from 'react';
import styles from './ButtonGroup.module.scss';
import { useAuthentication } from 'hooks/auth';
import { useIntl } from 'react-intl';
import { Link, useHistory } from 'react-router-dom';
import Menu from './Menu';

const ButtonGroup = () => {
  const history = useHistory();
  const handleRedirectTo = (path) => history.push(path);

  const { isAuthenticated } = useAuthentication();
  const intl = useIntl();
  const [showingMenu, setShowingMenu] = useState(false);
  return (
    <div className={styles.buttonGroup}>
      {isAuthenticated ? (
        <>
          {showingMenu && (
            <Menu
              isAuthenticated={isAuthenticated}
              redirectTo={handleRedirectTo}
            />
          )}

          <button
            className={styles.myAccount}
            type="button"
            onClick={() => setShowingMenu(!showingMenu)}
          >
            <i className="fas fa-user"></i>
            <span>My account</span>
          </button>
        </>
      ) : (
        <div className={styles.authGroup}>
          <Link to="sign-in">
            <button className={styles.loginButton}>
              <span>{intl.messages['common.signIn']}</span>
            </button>
          </Link>
          <Link to="sign-up">
            <button className={styles.signupButton}>
              <span>{intl.messages['common.signUp']}</span>
            </button>
          </Link>
        </div>
      )}

      <button className={styles.mycartButton}>
        <span>My Cart</span>
        <div className={styles.numberLabel}>
          <span>4</span>
        </div>
      </button>
    </div>
  );
};

export default ButtonGroup;
