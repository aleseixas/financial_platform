import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import CadastroPage from '../pages/CadastroPage';
import userEvent from '@testing-library/user-event';

test('deve permitir data válida dentro do intervalo (valores corretos)', async () => {
  render(
    <MemoryRouter>
      <CadastroPage />
    </MemoryRouter>
  );

  await userEvent.type(screen.getByPlaceholderText(/dia/i), '15');
  await userEvent.type(screen.getByPlaceholderText(/mes/i), '06');
  await userEvent.type(screen.getByPlaceholderText(/ano/i), '1990');
  await userEvent.click(screen.getByRole('button', { name: /Cadastre-se/i }));

  expect(screen.getByPlaceholderText(/dia/i).value).toBe('15');
  expect(screen.getByPlaceholderText(/mes/i).value).toBe('06');
  expect(screen.getByPlaceholderText(/ano/i).value).toBe('1990');
});

test('não deve permitir ano abaixo de 1900 (valor incorreto - limite inferior)', async () => {
    window.alert = jest.fn(); // Mock window.alert
  
    render(
      <MemoryRouter>
        <CadastroPage />
      </MemoryRouter>
    );
  
    await userEvent.type(screen.getByPlaceholderText(/dia/i), '15');
    await userEvent.type(screen.getByPlaceholderText(/mes/i), '06');
    await userEvent.type(screen.getByPlaceholderText(/ano/i), '1899');
    await userEvent.click(screen.getByRole('button', { name: /Cadastre-se/i })); //ano inválido
    
    expect(window.alert).toHaveBeenCalledWith('Data de nascimento inválida. Por favor, insira uma data válida.');
  });

test('não deve permitir ano superior ao atual (valor incorreto - limite superior)', async () => {
  render(
    <MemoryRouter>
      <CadastroPage />
    </MemoryRouter>
  );

  const currentYear = new Date().getFullYear();

  await userEvent.type(screen.getByPlaceholderText(/dia/i), '15');
  await userEvent.type(screen.getByPlaceholderText(/mes/i), '06');
  await userEvent.type(screen.getByPlaceholderText(/ano/i), (currentYear + 1).toString()); //ano inválido
  await userEvent.click(screen.getByRole('button', { name: /Cadastre-se/i }));

  expect(window.alert).toHaveBeenCalledWith('Data de nascimento inválida. Por favor, insira uma data válida.');
});

test('não deve permitir mês maior que 12 (valor incorreto - mês inválido)', async () => {
  render(
    <MemoryRouter>
      <CadastroPage />
    </MemoryRouter>
  );

  await userEvent.type(screen.getByPlaceholderText(/dia/i), '15');
  await userEvent.type(screen.getByPlaceholderText(/mes/i), '13'); // Mês inválido
  await userEvent.type(screen.getByPlaceholderText(/ano/i), '1990');
  await userEvent.click(screen.getByRole('button', { name: /Cadastre-se/i }));

  expect(window.alert).toHaveBeenCalledWith('Data de nascimento inválida. Por favor, insira uma data válida.');
});

test('não deve permitir dia maior que 31 (valor incorreto - dia inválido)', async () => {
  render(
    <MemoryRouter>
      <CadastroPage />
    </MemoryRouter>
  );

  // Verifique os campos
  await userEvent.type(screen.getByPlaceholderText(/dia/i), '32'); // Dia inválido
  await userEvent.type(screen.getByPlaceholderText(/mes/i), '06');
  await userEvent.type(screen.getByPlaceholderText(/ano/i), '1990');
  await userEvent.click(screen.getByRole('button', { name: /Cadastre-se/i }));

  expect(window.alert).toHaveBeenCalledWith('Data de nascimento inválida. Por favor, insira uma data válida.');
});
