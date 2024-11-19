import React, { useState, useEffect } from 'react';
import '../styles/perguntas.css';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

import { getSomaTotal } from './Perguntas';

// Importe o JSON diretamente
import resultadosData from '../Resources/resultados.json';

import logoArrojado from '../Resources/ganho.png';
import logoModerado from '../Resources/balanca-de-justica.png';
import logoConservador from '../Resources/cofre.png';

export const ResultadosQuiz = () => {
  const soma_total = getSomaTotal();
  const navigate = useNavigate();

  // Defina o índice com base no valor de soma_total
  var i = 0;
  if (soma_total >= 5 && soma_total <= 8) i = 0;
  else if (soma_total >= 9 && soma_total <= 12) i = 1;
  else i = 2;

  // Altere os logos conforme o JSON
  const resultados = resultadosData.resultados.map((resultado, index) => ({
    ...resultado,
    imagem: index === 0 ? logoConservador : index === 1 ? logoModerado : logoArrojado
  }));

  // Use useEffect to make a POST request when the component mounts
  useEffect(() => {
    const sendResults = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/quizresult', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            resultado: i === 0 ? 'Conservador' : i === 1 ? 'Moderado' : 'Arrojado'
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to send results');
        }

        const data = await response.json();
        console.log('Results sent successfully:', data);
      } catch (error) {
        console.error('Error sending results:', error);
      }
    };

    sendResults();
  }, [soma_total, resultados, i]);

  return (
    <div className='container'>
      <img 
        src={resultados[i].imagem}
        className='logo'
        alt='logo'
      />
      <p>{resultados[i].mensagem}</p>
      <Button text='Continuar' onClick={() => navigate('/profile')} />
    </div>
  );
};

export default ResultadosQuiz;













