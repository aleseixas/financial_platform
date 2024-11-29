import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cadastro from '../pages/CadastroPage'; // Caminho do seu componente Cadastro

describe('Cadastro Component', () => {
  
  describe('Validação de Data de Nascimento', () => {

    test('deve permitir data válida dentro do intervalo (valores corretos)', () => {
      render(<Cadastro />);
      
      userEvent.type(screen.getByLabelText(/dia/i), '15');
      userEvent.type(screen.getByLabelText(/mês/i), '06');
      userEvent.type(screen.getByLabelText(/ano/i), '1990');

      fireEvent.click(screen.getByText(/cadastre-se/i));

      expect(screen.queryByText(/data de nascimento inválida/i)).not.toBeInTheDocument();
    });

    test('não deve permitir ano abaixo de 1900 (valor incorreto - limite inferior)', () => {
      render(<Cadastro />);
      
      userEvent.type(screen.getByLabelText(/dia/i), '15');
      userEvent.type(screen.getByLabelText(/mês/i), '06');
      userEvent.type(screen.getByLabelText(/ano/i), '1800');

      fireEvent.click(screen.getByText(/cadastre-se/i));

      expect(screen.getByText(/data de nascimento inválida/i)).toBeInTheDocument();
    });

    test('não deve permitir ano superior ao atual (valor incorreto - limite superior)', () => {
      render(<Cadastro />);
      
      userEvent.type(screen.getByLabelText(/dia/i), '15');
      userEvent.type(screen.getByLabelText(/mês/i), '06');
      userEvent.type(screen.getByLabelText(/ano/i), '2100');

      fireEvent.click(screen.getByText(/cadastre-se/i));

      expect(screen.getByText(/data de nascimento inválida/i)).toBeInTheDocument();
    });

    test('não deve permitir mês maior que 12 (valor incorreto - mês inválido)', () => {
      render(<Cadastro />);
      
      userEvent.type(screen.getByLabelText(/dia/i), '15');
      userEvent.type(screen.getByLabelText(/mês/i), '13');
      userEvent.type(screen.getByLabelText(/ano/i), '1990');

      fireEvent.click(screen.getByText(/cadastre-se/i));

      expect(screen.getByText(/data de nascimento inválida/i)).toBeInTheDocument();
    });

    test('não deve permitir dia maior que 31 (valor incorreto - dia inválido)', () => {
      render(<Cadastro />);
      
      userEvent.type(screen.getByLabelText(/dia/i), '32');
      userEvent.type(screen.getByLabelText(/mês/i), '06');
      userEvent.type(screen.getByLabelText(/ano/i), '1990');

      fireEvent.click(screen.getByText(/cadastre-se/i));

      expect(screen.getByText(/data de nascimento inválida/i)).toBeInTheDocument();
    });

    test('não deve permitir data inválida (data não existe no calendário, ex: 31 de fevereiro)', () => {
      render(<Cadastro />);
      
      userEvent.type(screen.getByLabelText(/dia/i), '31');
      userEvent.type(screen.getByLabelText(/mês/i), '02');
      userEvent.type(screen.getByLabelText(/ano/i), '1990');

      fireEvent.click(screen.getByText(/cadastre-se/i));

      expect(screen.getByText(/data de nascimento inválida/i)).toBeInTheDocument();
    });

  });

});
