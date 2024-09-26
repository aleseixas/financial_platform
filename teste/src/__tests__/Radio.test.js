import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Radio from '../components/Radio'; // Adjust the import path as necessary

test('Radio button renders correctly and handles change event', () => {
  const handleChange = jest.fn();
  render(
	<Radio
	  id="radio1"
	  name="group1"
	  value="option1"
	  textLabel="Option 1"
	  onChange={handleChange}
	/>
  );

  const radioElement = screen.getByRole('radio');
  expect(radioElement).toBeInTheDocument();
  expect(radioElement).not.toBeChecked();

  fireEvent.click(radioElement);
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(radioElement).toBeChecked();
});