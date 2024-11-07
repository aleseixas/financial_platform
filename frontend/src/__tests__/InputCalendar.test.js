import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputCalendar from '../components/InputCalendar'; // Adjust the import path as necessary

const ControlledInputCalendar = () => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <InputCalendar
      id="calendar1"
      name="calendarName"
      value={value}
      placeholder="Select date"
      onChange={handleChange}
    />
  );
};

test('InputCalendar renders correctly and handles change event', () => {
  render(<ControlledInputCalendar />);

  const inputElement = screen.getByPlaceholderText('Select date');
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveValue('');

  fireEvent.change(inputElement, { target: { value: '2023-10-01' } });
  expect(inputElement).toHaveValue('2023-10-01');
});