import React from 'react';

import styles from './Navigation.module.scss';

const Navigation = ({ pageNumber, handlePageChange, totalPages }) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigationContainer}>
        <div className={`${styles.navigationNumberContainer} ${styles.navigationPreviousNumber} ${pageNumber - 1 === 0 && styles.disabled}`} onClick={() => handlePageChange(pageNumber - 1)}>
          <span>Previous</span>
        </div>
        {pageNumber - 1 > 0 && (
          <div className={styles.navigationNumberContainer} onClick={() => handlePageChange(pageNumber - 1)}>
            <span className={styles.navigationNumber}>{pageNumber - 1}</span>
          </div>
        )}
        <div className={`${styles.navigationNumberContainer} ${styles.isActive}`}>
          <span className={styles.navigationNumber}>{pageNumber}</span>
        </div>

        {totalPages - pageNumber > 0 && (
          <div className={styles.navigationNumberContainer} onClick={() => handlePageChange(pageNumber + 1)}>
            <span className={styles.navigationNumber}>{pageNumber + 1}</span>
          </div>
        )}

        <div className={`${styles.navigationNumberContainer} ${styles.navigationNextNumber} ${totalPages - pageNumber < 1 && styles.disabled}`} onClick={() => handlePageChange(pageNumber + 1)}>
          <span>Next</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
