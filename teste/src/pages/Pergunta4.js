import React from 'react'
import '../styles/perguntas.css'

const pergunta4 = "4. Como você se sentiria se seus investimentos sofressem uma queda de 20% em um curto período?"
const alternativaA = "a) Muito preocupado. Consideraria vendê-los para evitar um prejuízo maior."
const alternativaB = "b) Preocupado. No entanto, manteria os investimentos esperando uma recuperação."
const alternativaC = "c) Tranquilo. Enxergaria isso como uma oportunidade para comprar mais ativos."

const Pergunta4 = () => {
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
              <strong> {pergunta4} </strong>
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

export default Pergunta4