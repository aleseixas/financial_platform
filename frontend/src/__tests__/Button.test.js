// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';


test('renders the Button component with the correct label', () => {
  // Render the Button component
  render(<Button placeholder="Click me" className="button"/>);

  // Find the button element by its role and assert it has the correct text
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toHaveTextContent("Click me");
});


test('calls the onClick handler when the button is clicked', () => {
  // Create a mock function for the onClick event
  const handleClick = jest.fn();

  // Render the Button component and pass the mock onClick handler
  render(<Button className="button" onClick={handleClick}>Click me</Button>);

  // Find the button element by its role
  const buttonElement = screen.getByRole("button");

  // Simulate a click event on the button
  fireEvent.click(buttonElement);

  // Assert that the mock function was called once when clicked
  expect(handleClick).toHaveBeenCalledTimes(1);
});
