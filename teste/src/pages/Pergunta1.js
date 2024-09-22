import React from 'react'
import '../styles/perguntas.css'

const pergunta1 = "1. Qual é o seu principal objetivo ao investir?"
const alternativaA = "a) Preservar meu capital, mesmo que o retorno seja menor."
const alternativaB = "b) Obter um equilíbrio entre segurança e crescimento."
const alternativaC = "c) Buscar altos retornos, mesmo que isso signifique correr riscos maiores."

const Pergunta1 = () => {
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
              <strong> {pergunta1} </strong>
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

export default Pergunta1