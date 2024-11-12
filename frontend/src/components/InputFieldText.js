import React from 'react';

const InputFieldText = ({ id, type, value, placeholder, onChange, ...props}) => {
  return (
    <input 
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