import React from 'react';

import styles from 'components/products/Products.module.scss';

const Spinner = ({ path, ext }) => {
  return (
    <div className={styles.spinnerContainer}>
      <img alt={path} src={`${path}.${ext}`} className={styles.spinner} />
    </div>
  );
};

Spinner.defaultProps = {
  path: 'spinner',
  ext: 'png',
};
export default Spinner;
