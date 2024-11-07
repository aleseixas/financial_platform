import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputFieldText from '../components/InputFieldText'; // Adjust the import path as necessary

const ControlledInputFieldText = () => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <InputFieldText
      id="input1"
      name="inputName"
      value={value}
      placeholder="Enter text"
      onChange={handleChange}
    />
  );
};

test('InputFieldText renders correctly and handles change event', () => {
  render(<ControlledInputFieldText />);

  const inputElement = screen.getByPlaceholderText('Enter text');
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveValue('');

  fireEvent.change(inputElement, { target: { value: 'New text' } });
  expect(inputElement).toHaveValue('New text');
});