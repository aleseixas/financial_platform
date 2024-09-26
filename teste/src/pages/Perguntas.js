import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/perguntas.css';
import Button from '../components/Button';

const perguntas = [
    {
        'pergunta': "1. Qual é o seu principal objetivo ao investir?",
        'alternativas': [
            "a) Preservar meu capital, mesmo que o retorno seja menor.",
            "b) Obter um equilíbrio entre segurança e crescimento.",
            "c) Buscar altos retornos, mesmo que isso signifique correr riscos maiores."
        ]
    },
    {
        'pergunta': "2. Em quanto tempo você espera recuperar seus investimentos?",
        'alternativas': [
            "a) Curto prazo (menos de 3 anos).",
            "b) Médio prazo (entre 3 e 5 anos).",
            "c) Longo prazo (mais de 5 anos)."
        ]
    },
    {
        'pergunta': "3. Em que tipo de investimentos você se sente mais confortável?",
        'alternativas': [
            "a) Títulos de renda fixa e CDBs.",
            "b) Fundos multimercado que combinam renda fixa e variável.",
            "c) Ações, fundos de investimento agressivos e criptomoedas."
        ]
    },
    {
        'pergunta': "4. Como você se sentiria se seus investimentos sofressem uma queda de 20% em um curto período?",
        'alternativas': [
            "a) Muito preocupado. Consideraria vendê-los para evitar um prejuízo maior.",
            "b) Preocupado. No entanto, manteria os investimentos esperando uma recuperação.",
            "c) Tranquilo. Enxergaria isso como uma oportunidade para comprar mais ativos."
        ]
    },
    {
        'pergunta': "5. Quais opções você considera ao pensar em um investimento?",
        'alternativas': [
            "a) Prefiro opções já conhecidas e seguras, nas quais sei exatamente o que esperar.",
            "b) Gosto de considerar novas oportunidades, mas prefiro avaliar bem antes de decidir.",
            "c) Estou sempre buscando novas ideias, disposto a experimentar algo inovador e arriscado."
        ]
    },
]

let soma_total = 0;
let alternativa_atual = 0;
export const getSomaTotal = () => soma_total;
export const setSomaTotal = (val) => {soma_total = val;};

const Perguntas = () => {
    const [i, setI] = useState(0);
    const navigate = useNavigate();

    const handleClick = () => {
        if (i == 0) soma_total = 0;
        soma_total += alternativa_atual;
        if (i < perguntas.length - 1) {
            setI(i + 1);
        }
        else {
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
              <strong> {perguntas[i].pergunta} </strong>
            </p>
            <div className="options">
            <label className="option">
            <input
                  type="radio"
                  name="investment-question"
                  value="1"
                  onChange={handleOptionChange}
            />
            <span> {perguntas[i].alternativas[0]} </span>
            </label>
            <label className="option">
            <input
                type="radio"
                name="investment-question"
                value="2"
                onChange={handleOptionChange}
            />
            <span> {perguntas[i].alternativas[1]} </span>
            </label>
            <label className="option">
            <input
                  type="radio"
                  name="investment-question"
                  value="3"
                  onChange={handleOptionChange}
            />
            <span> {perguntas[i].alternativas[2]} </span>
            </label>
        </div>
        <Button onClick={handleClick} placeholder={i === perguntas.length - 1 ? "Finalizar" : "Continuar"} className={"continue-button"}/>
        </div>
    </div>
    )
}

export default Perguntas