import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Perguntas, { getSomaTotal, setSomaTotal } from '../pages/Perguntas'; // Adjust the import path as necessary

// This section creates a automated test for the Perguntas page
// The test checks if the total sum is calculated correctly
// Note that it only uses equivalence partitioning to test the sum calculation
// There is no need for boundary value analysis since the sum is calculated only by adding the values of the selected alternatives

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
