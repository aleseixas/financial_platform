import React from 'react'
import '../styles/perguntas.css'

const pergunta3 = "3. Em que tipo de investimentos você se sente mais confortável?"
const alternativaA = "a) Títulos de renda fixa e CDBs."
const alternativaB = "b) Fundos multimercado que combinam renda fixa e variável."
const alternativaC = "c) Ações, fundos de investimento agressivos e criptomoedas."

const Pergunta3 = () => {
    const handleOptionChange = (event) => {
        const options = document.getElementsByName('investment-question');
        options.forEach(option => {
          option.parentNode.classList.remove('selected'); 
        });
        event.target.parentNode.classList.add('selected'); 
      };
    
      return (
        <div className="container">
          <div className="question-box">
            <p className="question">
              <strong> {pergunta3} </strong>
            </p>
            <div className="options">
            <label className="option">
            <input
                  type="radio"
                  name="investment-question"
                  onChange={handleOptionChange}
            />
            <span> {alternativaA} </span>
            </label>
            <label className="option">
            <input
                type="radio"
                name="investment-question"
                onChange={handleOptionChange}
            />
            <span> {alternativaB} </span>
            </label>
            <label className="option">
            <input
                  type="radio"
                  name="investment-question"
                  onChange={handleOptionChange}
            />
            <span> {alternativaC} </span>
            </label>
        </div>
        <button className="continue-button">Continuar</button>
        </div>
    </div>
    )
}

export default Pergunta3