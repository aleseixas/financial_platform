import React, {useState} from 'react'
import '../styles/perguntas.css'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

import logoArrojado from '../Resources/ganho.png'
import logoModerado from '../Resources/balanca-de-justica.png'
import logoConservador from '../Resources/cofre.png'
import { getSomaTotal} from './Perguntas'


const resultados = [
    {
        'mensagem': "Parabéns! De acordo com suas respostas no quiz, você se encaixa no perfil de investidor conservador. Isso significa que você valoriza a segurança e prefere evitar grandes riscos, priorizando a preservação do seu capital em vez de buscar retornos elevados. Seu foco está em investimentos mais estáveis e previsíveis, como títulos de renda fixa, CDBs e fundos conservadores, que tendem a oferecer maior segurança mesmo que a rentabilidade seja mais baixa. Esse perfil é ideal para quem busca tranquilidade financeira e tem um horizonte de longo prazo para alcançar seus objetivos com menos volatilidade.",
        'imagem': logoConservador
    },
    {
        'mensagem': "Parabéns! Com base nas suas respostas no quiz, você tem o perfil de investidor moderado. Isso significa que você busca um equilíbrio entre segurança e retorno, estando disposto a correr um pouco mais de risco em busca de melhores ganhos, mas sem abrir mão de uma certa proteção do capital. Você tende a diversificar seus investimentos, combinando ativos de renda fixa com opções de renda variável, como ações e fundos multimercado. Seu objetivo é crescer seu patrimônio de forma gradual, mas com uma dose calculada de exposição ao mercado, equilibrando prudência com oportunidades de retorno.",
        'imagem': logoModerado
    },
    {
        'mensagem': "Parabéns! De acordo com o quiz, você tem o perfil de investidor arrojado. Isso significa que você está disposto a correr mais riscos em busca de maiores retornos. Você aceita a volatilidade do mercado e está confortável com investimentos que podem ter grandes variações no curto prazo, desde que tenham potencial de ganhos elevados no longo prazo. Seu portfólio tende a incluir uma maior proporção de ativos de renda variável, como ações, fundos de investimentos mais agressivos, e até mesmo criptomoedas. Esse perfil é ideal para quem busca crescimento rápido e tem uma boa tolerância ao risco.",
        'imagem': logoArrojado
    }
]

export const ResultadosQuiz = () => {
    const soma_total = getSomaTotal();
    const navigate = useNavigate();
    var i = 0;

    if (soma_total >= 5 && soma_total <= 8) i = 0;
    else if (soma_total >= 9 && soma_total <= 12) i = 1;
    else i = 2;

    return (
    <div className='container'>
        <img 
            src = {resultados[i].imagem}
            className='logo'
            alt='logo'
        />
        <p>{resultados[i].mensagem}</p>
        <Button text='Continuar' onClick={() => navigate('/')}/>
    </div>
  )
}

export default ResultadosQuiz