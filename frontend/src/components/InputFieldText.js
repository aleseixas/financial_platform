import React from 'react';

const InputFieldText = ({ id, className, type, value, placeholder, onChange, ...props}) => {
  return (
    <input 
      className={className}
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
};

export default InputFieldText;