import React, { useState } from 'react';
import '../styles/quantbot.css';
import Navbar from '../components/Navbar';
import Select from 'react-select'
import Button from '../components/Button';
import DivAlinhamentoCentro from '../components/DivAlinhamentoCentro';
import InfoBox from '../components/InfoBox';
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
  { value: 'WBD', label: 'Warner Bros'},
  { value: 'PETR4.SA', label: 'Petrobras'},
  { value: 'ABEV3.SA', label: 'Ambev'}
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
  
  return {
    'values': result.values,
    'returns': result.returns
  }
}

const QuantBot = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false);
  const [config, setConfig] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [cumulativeReturn, setCumulativeReturn] = useState(null);
  const [strategyReturn, setStrategyReturn] = useState(null);
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
      const result = response.values;
      const returns = response.returns;
      const labels = await result.map((_, index) => index);

      const data = {
        labels,
        datasets: [
          {
            label: 'Retorno da estratégia',
            data: result,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.4,
            yAxisID: 'y'
          },
          {
            label: 'Retorno da ação',
            data: returns,
            borderColor: 'rgba(206, 19, 19, 0.8)',
            tension: 0.4,
            yAxisID: 'y1'
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
              text: 'Tempo em dias (início: 10 anos atrás)',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Ganho da estratégia',
            },
            beginAtZero: true,
            position: 'left',
          },
          y1: {
            title:{
              display: true,
              text: 'Ganho da ação'
            },

            beginAtZero: true,
            position: 'right',
            grid: {
              display: false,
            },
            ticks: {
              display: true
            }
          }
        },
      };
      setHistoricalData(data);
      setConfig(options);
      setCumulativeReturn(returns.pop());
      setStrategyReturn(result.pop())
    }
    
  };


  return (
    <>
      <Navbar />
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

      {cumulativeReturn && strategyReturn &&
        
        <DivAlinhamentoCentro 
          reactComponentToBeAligned={
            <InfoBox 
            componentList={[
              <p style={{'fontSize': '20px', 'text-align': 'center', 'margin': '5px'}}>Resumo de ganhos</p>,
              <div style={{'fontSize': '20px', 'borderRadius': '5px', 'boxShadow': '0 5px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)', 'padding': '5px', 'margin': '5px'}}>Ganho acumulado da estratégia: {Number(strategyReturn).toFixed(2)}%</div>,
              <div style={{'fontSize': '20px', 'borderRadius': '5px', 'boxShadow': '0 5px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)', 'padding': '5px', 'margin': '5px'}}>Ganho acumulado da ação: {Number(cumulativeReturn).toFixed(2)}%</div>
            ]}
            />
          }
        />
        
      }

    </>
  );
};

export default QuantBot;
