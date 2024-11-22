import React, { useState, useEffect } from 'react';
import '../styles/resultados.css';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { getSomaTotal } from './Perguntas';
import resultadosData from '../Resources/resultados.json';

import logoArrojado from '../Resources/ganho.png';
import logoModerado from '../Resources/balanca-de-justica.png';
import logoConservador from '../Resources/cofre.png';
import Navbar from '../components/Navbar';

export const ResultadosQuiz = () => {
  const soma_total = getSomaTotal();
  const navigate = useNavigate();

  let i = 0;
  if (soma_total >= 5 && soma_total <= 8) i = 0;
  else if (soma_total >= 9 && soma_total <= 12) i = 1;
  else i = 2;

  const resultados = resultadosData.resultados.map((resultado, index) => ({
    ...resultado,
    imagem: index === 0 ? logoConservador : index === 1 ? logoModerado : logoArrojado
  }));

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
    <>

      <Navbar />
      <div className="center-wrapper">
        <div className='container-resultados'>
          <img 
            src={resultados[i].imagem}
            className='logo'
            alt='logo'
          />
          <p>{resultados[i].mensagem}</p>
          <button onClick={() => navigate('/profile')}>Continuar</button>
        </div>
      </div>
    </>
  );
};

export default ResultadosQuiz;
