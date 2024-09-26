import React from 'react';

const InputFieldText = ({ id, name, value, placeholder, onChange }) => {
  return (
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputFieldText;