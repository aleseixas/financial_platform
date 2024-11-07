import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import CadastroPage from '../pages/CadastroPage'; // Adjust the import path as necessary

test('renders input fields and accepts text input', () => {
  render(
    <MemoryRouter>
      <CadastroPage />
    </MemoryRouter>
  );

  // Find input fields by placeholder text or label
  const nameInput = screen.getByPlaceholderText("Nome"); // Adjust the placeholder text as necessary
  const sobrenomeInput = screen.getByPlaceholderText("Sobrenome"); // Adjust the placeholder text as necessary
  const emailInput = screen.getByPlaceholderText("Email");
  const senhaInput = screen.getByPlaceholderText("Senha");
  const diaInput = screen.getByPlaceholderText("Dia");
  const mesInput = screen.getByPlaceholderText("Mes");
  const anoInput = screen.getByPlaceholderText("Ano");
  const masculinoRadio = screen.getByLabelText("Masculino");

  // Simulate user typing into the input fields
  fireEvent.change(nameInput, { target: { value: 'John' } });
  fireEvent.change(sobrenomeInput, { target: { value: 'Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
  fireEvent.change(senhaInput, { target: { value: 'password123' } });
  fireEvent.change(diaInput, { target: { value: '01' } });
  fireEvent.change(mesInput, { target: { value: '01' } });
  fireEvent.change(anoInput, { target: { value: '2000' } });

  // Simulate user selecting the "Masculino" radio button
  fireEvent.click(masculinoRadio);

  // Verify that the input fields contain the expected text
  expect(nameInput.value).toBe('John');
  expect(sobrenomeInput.value).toBe('Doe');
  expect(emailInput.value).toBe('john.doe@example.com');
  expect(senhaInput.value).toBe('password123');
  expect(diaInput.value).toBe('01');
  expect(mesInput.value).toBe('01');
  expect(anoInput.value).toBe('2000');

  // Verify that the "Masculino" radio button is selected
  expect(masculinoRadio.checked).toBe(true);
});