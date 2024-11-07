import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage'; // Adjust the import path as necessary

test('renders login input fields and accepts text input', () => {
  render(
	<MemoryRouter>
	  <LoginPage />
	</MemoryRouter>
  );

  // Find input fields by placeholder text or label
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Senha");
  const loginButton = screen.getByText("Entrar");

  // Simulate user typing into the input fields
  fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Simulate user clicking the login button
  fireEvent.click(loginButton);

  // Verify that the input fields contain the expected text
  expect(emailInput.value).toBe('john.doe@example.com');
  expect(passwordInput.value).toBe('password123');
});