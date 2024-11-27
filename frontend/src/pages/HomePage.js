import React, { useState } from 'react';
import '../styles/homepage.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

let feature = 1;
export const getFeature = () => feature;

const HomePage = () => {
  
  const navigate = useNavigate();
  const [activeText, setActiveText] = useState('');

  const handleButtonClick = (event) => {
    const value = event.target.innerText;
    setActiveText(value);
    if (value === "Leituras") feature = 0;
    else if (value === "Notícias") feature = 1;
    else if (value === "Cursos") feature = 2;
    else if (value === "Quiz") feature = 3;
    else if (value === "QuantBot") feature = 4;
    navigate('/descricoes');
  };
  
  return (
    <>
    <Navbar />
    <div className = "container-brabo-da-home">
    <div className="feature">
        <button className="feature-b" onClick={handleButtonClick}>QuantBot</button>
        <button className="feature-b" onClick={handleButtonClick}>Leituras</button>
        <button className="feature-b" onClick={handleButtonClick}>Notícias</button>
        <button className="feature-b" onClick={handleButtonClick}>Cursos</button>
        <button className="feature-b" onClick={handleButtonClick}>Quiz</button>
        
      </div>
      <div className="content">
        {activeText ? (
          <div className="content-text">{activeText}</div>
        ) : (
          <div className="content-placeholder"></div>
        )}
      </div>
    </div>
    </>

    
  );
}

export default HomePage