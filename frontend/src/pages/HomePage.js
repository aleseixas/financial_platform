import React, { useState } from 'react';
import '../styles/homepage.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  
  
  const handleButtonClick = (event) => {
    
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
        <button className="feature-b" onClick={handleButtonClick}>Qui</button>
        
      </div>
    </div>
    </>

    
  );
}

export default HomePage