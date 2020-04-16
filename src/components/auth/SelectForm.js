import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
const SelectForm = forwardRef((props, ref) => {
  const { label, name, selectValues, isRequired, className } = props

  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)
  return (
    <div className={className}>
      <label>
        {label}
        {isRequired && (
          <span className={className + '-required'}> (required)</span>
        )}
      </label>
      <select ref={ref} name={name} className={className}>
        {selectValues &&
          selectValues.map(value_ => (
            <option key={value_.value} value={value_.value}>
              {name + capitalize(value_.value)}
            </option>
          ))}
      </select>
    </div>
  )
})

SelectForm.defaultProps = {
  selectValues: [],
  label: '',
  name: '',
  isRequired: false,
  className: 'auth__form'
}
SelectForm.propTypes = {
  selectValues: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired
}

export default SelectForm
