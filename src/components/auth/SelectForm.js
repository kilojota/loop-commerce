import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import styles from './AuthStyles.module.scss';

const SelectForm = forwardRef((props, ref) => {
  const { label, errors, name, selectValues, isRequired, className } = props;
  const intl = useIntl();

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div className={errors[name] ? `${className} ${styles.formError}` : className}>
      <label>
        {label}
        {isRequired && <span className={className + '-required'}> (required)</span>}
      </label>
      <select ref={ref} name={name} className={className}>
        {selectValues &&
          selectValues.map((value_) => (
            <option key={value_.value} value={value_.value}>
              {intl.messages[`common.gender${capitalize(value_.value)}`]}
            </option>
          ))}
      </select>
      {errors[name] && errors[name].type === 'required' && <span className={styles.labelError}>{intl.messages[`common.${name}Required`]}</span>}

      {errors[name] && errors[name].type === 'pattern' && <span className={styles.labelError}>{intl.messages[`common.${name}Invalid`]}</span>}
    </div>
  );
});

SelectForm.defaultProps = {
  selectValues: [],
  label: '',
  name: '',
  isRequired: false,
  className: styles.authForm,
};
SelectForm.propTypes = {
  selectValues: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default SelectForm;
