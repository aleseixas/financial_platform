import React, { useState } from 'react';

const Checkbox = ({ onChange, label, id }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;