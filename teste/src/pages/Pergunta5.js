import React from 'react'
import '../styles/perguntas.css'

const pergunta5 = "5. Quais opções você considera ao pensar em um investimento?"
const alternativaA = "a) Prefiro opções já conhecidas e seguras, nas quais sei exatamente o que esperar."
const alternativaB = "b) Gosto de considerar novas oportunidades, mas prefiro avaliar bem antes de decidir."
const alternativaC = "c) Estou sempre buscando novas ideias, disposto a experimentar algo inovador e arriscado."

const Pergunta5 = () => {
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
              <strong> {pergunta5} </strong>
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
        <button className="continue-button">Finalizar</button>
        </div>
    </div>
    )
}

export default Pergunta5