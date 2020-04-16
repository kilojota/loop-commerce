import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
const Form = forwardRef((props, ref) => {
  const { value, type, label, name, placeholder, isRequired, className } = props

  const [formValue, setFormValue] = useState(value)
  const onChange = e => {
    setFormValue(e.target.value)
  }
  return (
    <div className={className}>
      <label>
        {label}
        {isRequired && (
          <span className={className + '-required'}> (required)</span>
        )}
      </label>
      <input
        ref={ref}
        value={formValue}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  )
})

Form.defaultProps = {
  value: '',
  type: 'text',
  label: '',
  name: '',
  placeholder: '',
  isRequired: false,
  className: 'auth__form'
}
Form.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired
}

export default Form
