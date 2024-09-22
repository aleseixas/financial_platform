import React from 'react'
import '../styles/perguntas.css'

const pergunta2 = "2. Em quanto tempo você espera recuperar seus investimentos?"
const alternativaA = "a) Curto prazo (menos de 3 anos)."
const alternativaB = "b) Médio prazo (entre 3 e 5 anos)."
const alternativaC = "c) Longo prazo (mais de 5 anos)."

const Pergunta2 = () => {
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
              <strong> {pergunta2} </strong>
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

export default Pergunta2