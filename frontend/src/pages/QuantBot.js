import React, { useState } from 'react';
import '../styles/quantbot.css';
import Navbar from '../components/Navbar';

/**
 * QuantBot page. Note that we only 
 */

const QuantBot = () => {
  const [values, setValues] = useState({ value1: '', value2: '', value3: '', value4: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Allow only integer values
    if (/^\d*$/.test(value)) {
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  const handleClick = () => {
    alert(`Values entered: ${values.value1}, ${values.value2}, ${values.value3}, ${values.value4}`);
  };

  return (
    <>
      <Navbar />
      <div className="calculadora-container">
        <div className="finput-group">
          <input
            type="text"
            name="value1"
            value={values.value1}
            onChange={handleChange}
            placeholder="Enter value 1"
          />
          <input
            type="text"
            name="value2"
            value={values.value2}
            onChange={handleChange}
            placeholder="Enter value 2"
          />
          <input
            type="text"
            name="value3"
            value={values.value3}
            onChange={handleChange}
            placeholder="Enter value 3"
          />
          <input
            type="text"
            name="value4"
            value={values.value4}
            onChange={handleChange}
            placeholder="Enter value 4"
          />
        </div>
        <button className="fbutton" onClick={handleClick}>Click Me!</button>
      </div>
    </>
  );
};

export default QuantBot;
