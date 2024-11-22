import React, { useState } from 'react';
import '../styles/quantbot.css';
import Navbar from '../components/Navbar';
import Select from 'react-select'
import Button from '../components/Button';
import DivAlinhamentoCentro from '../components/DivAlinhamentoCentro';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Ative os componentes do Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const optionsList = [
  { value: 'AAPL', label: 'Apple' },
  { value: 'MSFT', label: 'Microsoft' },
  { value: 'GE', label: 'General Electric' },
  { value: 'MRNA', label: 'Moderna' },
  { value: 'WBD', label: 'Warner Bros'}
]

const callSimulateStrategy = async (option) => {

  const response = await fetch("http://localhost:8000/api/simulateStrategy", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tickerName: option.value })
  })

  if (!response.ok) {
    return null;
  }
  
  const result = await response.json();
  return result.values;
}

const QuantBot = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false);
  const [config, setConfig] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);

  const handleChange = (option) => {
    if (error) {
      setError(false);
    }
    setSelectedOption(option);
  };

  const handleClick = async () => {
    if (selectedOption === null) {
      setError(true);
    }
    else {
      const response = await callSimulateStrategy(selectedOption);
      const labels = await response.map((_, index) => index);

      const data = {
        labels,
        datasets: [
          {
            label: 'Retorno ao longo do tempo',
            data: response,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.4
          }
        ]
      }
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Tempo',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Valor',
            },
            beginAtZero: true,
          },
        },
      };
      setHistoricalData(data);
      setConfig(options);

    }
    
  };

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <DivAlinhamentoCentro 
        reactComponentToBeAligned={
        <Select 
          className='select'
          options={optionsList}
          value={selectedOption}
          onChange={handleChange}
          placeholder='Escolha uma das seguintes ações'
        />
      }/>
      
      
      {error && selectedOption === null && 
      <DivAlinhamentoCentro reactComponentToBeAligned={
        <p>
          Selecione uma opção válida!
        </p>
      }/>}

      <DivAlinhamentoCentro 
        reactComponentToBeAligned={
          <Button 
            placeholder='Simular estratégia'
            className='botao'
            onClick={handleClick}
        />}
      />
      
      {historicalData && config && 
        <DivAlinhamentoCentro 
          reactComponentToBeAligned={
            <Line className='grafico' data={historicalData} options={config}/>
          }
        />
      }

=======
      <div className="calculadora-container">
        <div className="finput-group">
          <input
            type="text"
            name="value1"
            value={values.value1}
            onChange={handleChange}
            placeholder="Enter value 1"
          />
          <input
            type="text"
            name="value2"
            value={values.value2}
            onChange={handleChange}
            placeholder="Enter value 2"
          />
          <input
            type="text"
            name="value3"
            value={values.value3}
            onChange={handleChange}
            placeholder="Enter value 3"
          />
          <input
            type="text"
            name="value4"
            value={values.value4}
            onChange={handleChange}
            placeholder="Enter value 4"
          />
        </div>
        <button className="fbutton" onClick={handleClick}>Click Me!</button>
      </div>
>>>>>>> 1e17c1eee047e764f9542c993d5ec85325a019f9
    </>
  );
};

export default QuantBot;
