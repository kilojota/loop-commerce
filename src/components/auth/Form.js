import React, { forwardRef, useState } from 'react';

const Form = forwardRef((props, ref) => {
  const { value, type, label, name, placeholder, className } = props;

  const [formValue, setFormValue] = useState(value);

  const onChange = (e) => {
    setFormValue(e.target.value);
  };
  return (
    <div className={className}>
      <label>{label}</label>
      <input ref={ref} value={formValue} type={type} name={name} placeholder={placeholder} onChange={onChange}></input>
    </div>
  );
});

export default Form;
