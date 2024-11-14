import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/perguntas.css';
import Button from '../components/Button';
import perguntasData from '../Resources/perguntas.json';  // Importe os dados do JSON

let soma_total = 0;
let alternativa_atual = 0;
export const getSomaTotal = () => soma_total;
export const setSomaTotal = (val) => { soma_total = val; };

const Perguntas = () => {
    const [i, setI] = useState(0);
    const navigate = useNavigate();

    const handleClick = () => {
        if (i === 0) soma_total = 0;
        soma_total += alternativa_atual;
        if (i < perguntasData.length - 1) {
            setI(i + 1);
        } else {
            console.log(soma_total);
            navigate('/resultados');
        }
    };

    const handleOptionChange = (event) => {
        const options = document.getElementsByName('investment-question');
        options.forEach(option => {
            option.parentNode.classList.remove('selected');
        });
        event.target.parentNode.classList.add('selected');
        alternativa_atual = parseInt(event.target.value);
    };

    return (
        <div className="container">
            <div className="question-box">
                <p className="question">
                    <strong> {perguntasData[i].pergunta} </strong>
                </p>
                <div className="options">
                    <label className="option">
                        <input
                            type="radio"
                            name="investment-question"
                            value="1"
                            onChange={handleOptionChange}
                        />
                        <span> {perguntasData[i].alternativas[0]} </span>
                    </label>
                    <label className="option">
                        <input
                            type="radio"
                            name="investment-question"
                            value="2"
                            onChange={handleOptionChange}
                        />
                        <span> {perguntasData[i].alternativas[1]} </span>
                    </label>
                    <label className="option">
                        <input
                            type="radio"
                            name="investment-question"
                            value="3"
                            onChange={handleOptionChange}
                        />
                        <span> {perguntasData[i].alternativas[2]} </span>
                    </label>
                </div>
                <Button onClick={handleClick} placeholder={i === perguntasData.length - 1 ? "Finalizar" : "Continuar"} className={"continue-button"} />
            </div>
        </div>
    );
};

export default Perguntas;

