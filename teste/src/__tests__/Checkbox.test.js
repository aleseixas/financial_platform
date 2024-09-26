import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkbox from '../components/Checkbox'; // Adjust the import path as necessary

test('Checkbox changes state when clicked', () => {
  const handleChange = jest.fn();
  render(<Checkbox onChange={handleChange} />);

  const checkboxElement = screen.getByRole('checkbox');
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(checkboxElement).toBeChecked();
});