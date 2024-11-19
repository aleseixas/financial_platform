import React from 'react';

const InputCalendar = ({ id, name, value, placeholder, onChange }) => {
  return (
    <input
      type="date"
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputCalendar;