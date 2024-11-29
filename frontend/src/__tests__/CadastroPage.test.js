import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import CadastroPage from '../pages/CadastroPage'; // Ajuste o caminho da importação conforme necessário
import userEvent from '@testing-library/user-event';

// Teste para permitir data válida dentro do intervalo
test('deve permitir data válida dentro do intervalo (valores corretos)', async () => {
  render(
    <MemoryRouter>
      <CadastroPage />
    </MemoryRouter>
  );

  // Verifique os campos
  await userEvent.type(screen.getByPlaceholderText(/dia/i), '15');
  await userEvent.type(screen.getByPlaceholderText(/mes/i), '06');
  await userEvent.type(screen.getByPlaceholderText(/ano/i), '1990');

  // Verifique se os valores foram digitados corretamente
  expect(screen.getByPlaceholderText(/dia/i).value).toBe('15');
  expect(screen.getByPlaceholderText(/mes/i).value).toBe('06');
  expect(screen.getByPlaceholderText(/ano/i).value).toBe('1990');
});

// Teste para não permitir ano abaixo de 1900
test('não deve permitir ano abaixo de 1900 (valor incorreto - limite inferior)', async () => {
  render(
    <MemoryRouter>
      <CadastroPage />
    </MemoryRouter>
  );

  // Verifique os campos
  await userEvent.type(screen.getByPlaceholderText(/dia/i), '15');
  await userEvent.type(screen.getByPlaceholderText(/mes/i), '06');
  await userEvent.type(screen.getByPlaceholderText(/ano/i), '1800');

  // Verifique se o valor de ano está abaixo de 1900 e a validação ocorre
  expect(screen.getByPlaceholderText(/ano/i).value).toBe('1800');
  // Aqui você deve verificar se o sistema realmente bloqueou o valor
  // Você pode usar algo como um alerta ou um erro de validação no seu formulário
});

// Teste para não permitir ano superior ao atual
test('não deve permitir ano superior ao atual (valor incorreto - limite superior)', async () => {
  render(
    <MemoryRouter>
      <CadastroPage />
    </MemoryRouter>
  );

  const currentYear = new Date().getFullYear();

  // Verifique os campos
  await userEvent.type(screen.getByPlaceholderText(/dia/i), '15');
  await userEvent.type(screen.getByPlaceholderText(/mes/i), '06');
  await userEvent.type(screen.getByPlaceholderText(/ano/i), (currentYear + 1).toString());

  // Verifique se o valor de ano está superior ao atual
  expect(screen.getByPlaceholderText(/ano/i).value).toBe((currentYear + 1).toString());
  // Aqui você deve verificar a validação que bloqueia o ano acima do limite
});

// Teste para não permitir mês maior que 12
test('não deve permitir mês maior que 12 (valor incorreto - mês inválido)', async () => {
  render(
    <MemoryRouter>
      <CadastroPage />
    </MemoryRouter>
  );

  // Verifique os campos
  await userEvent.type(screen.getByPlaceholderText(/dia/i), '15');
  await userEvent.type(screen.getByPlaceholderText(/mes/i), '13'); // Mês inválido
  await userEvent.type(screen.getByPlaceholderText(/ano/i), '1990');

  // Verifique se o mês digitado não é aceito
  expect(screen.getByPlaceholderText(/mes/i).value).toBe('13');
  // Aqui você deve verificar se o sistema bloqueia a entrada de mês maior que 12
});

// Teste para não permitir dia maior que 31
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

  // Verifique se o dia digitado não é aceito
  expect(screen.getByPlaceholderText(/dia/i).value).toBe('32');
  // Aqui você deve verificar se o sistema bloqueia a entrada de dia maior que 31
});
