import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Perguntas, { getSomaTotal, setSomaTotal } from '../pages/Perguntas'; // Adjust the import path as necessary

test('calculates total correctly after selecting the first alternative for each question', () => {
  render(
    <MemoryRouter>
      <Perguntas />
    </MemoryRouter>
  );

  const nextButton = screen.getByText('Continuar');

  // Loop through each question, select the first alternative, and click "Next"
  for(let i=0; i<5; i++){ 
    const firstOption = screen.getAllByRole('radio')[0];
    fireEvent.click(firstOption);
    fireEvent.click(nextButton);
  };

  // Verify the final value of soma_total
  expect(getSomaTotal()).toBe(5); // The sum should be 5 after selecting the first alternative for each question
});

test('calculates total correctly after selecting the second alternative for each question', () => {
  render(
    <MemoryRouter>
      <Perguntas />
    </MemoryRouter>
  );

  const nextButton = screen.getByText('Continuar');

  // Loop through each question, select the second alternative, and click "Next"
  for(let i=0; i<5; i++){ 
    const firstOption = screen.getAllByRole('radio')[1];
    fireEvent.click(firstOption);
    fireEvent.click(nextButton);
  };

  // Verify the final value of soma_total
  expect(getSomaTotal()).toBe(10); // The sum should be 10 after selecting the second alternative for each question
});

test('calculates total correctly after selecting the third alternative for each question', () => {
  render(
    <MemoryRouter>
      <Perguntas />
    </MemoryRouter>
  );

  const nextButton = screen.getByText('Continuar');

  // Loop through each question, select the second alternative, and click "Next"
  for(let i=0; i<5; i++){ 
    const firstOption = screen.getAllByRole('radio')[2];
    fireEvent.click(firstOption);
    fireEvent.click(nextButton);
  };
  // Verify the final value of soma_total
  expect(getSomaTotal()).toBe(15); // The sum should be 10 after selecting the second alternative for each question
});
