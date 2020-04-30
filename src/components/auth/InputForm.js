import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import styles from './AuthStyles.module.scss';

const Form = forwardRef((props, ref) => {
  const { type, label, name, placeholder, errors, isRequired, className, helpLinkPath, helpMessage } = props;
  const intl = useIntl();

  return (
    <div className={errors[name] ? `${className} ${styles.formError}` : className}>
      <label className={helpLinkPath !== '' ? styles.inputLabelHelper : ''}>
        <span className={styles.authFormLabel}>{label}</span>

        {isRequired && <span className={styles.labelRequired}> ({intl.messages['common.required']})</span>}
        {helpLinkPath && (
          <Link className={styles.labelLink} to={helpLinkPath}>
            <span>{helpMessage}</span>
          </Link>
        )}
      </label>
      <input ref={ref} type={type} name={name} placeholder={placeholder} />
      {errors[name] && errors[name].type === 'required' && <span className={styles.labelError}>{intl.messages[`common.${name}Required`]}</span>}
      {errors[name] && errors[name].type === 'minLength' && <span className={styles.labelError}>{intl.messages[`common.${name}Invalid`]}</span>}
      {errors[name] && errors[name].type === 'pattern' && <span className={styles.labelError}>{intl.messages[`common.${name}Invalid`]}</span>}
    </div>
  );
});

Form.defaultProps = {
  value: '',
  type: 'text',
  label: '',
  name: '',
  placeholder: '',
  helpLinkPath: '',
  helpMessage: '',
  isRequired: false,
  className: styles.authForm,
};
Form.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default Form;
