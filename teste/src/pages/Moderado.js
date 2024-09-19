import React from 'react'
import '../styles/resultados.css'
import logo from '../Resources/balanca-de-justica.png'

const textoUsuario = "Parabéns! Com base nas suas respostas no quiz, você tem o perfil de investidor moderado. Isso significa que você busca um equilíbrio entre segurança e retorno, estando disposto a correr um pouco mais de risco em busca de melhores ganhos, mas sem abrir mão de uma certa proteção do capital. Você tende a diversificar seus investimentos, combinando ativos de renda fixa com opções de renda variável, como ações e fundos multimercado. Seu objetivo é crescer seu patrimônio de forma gradual, mas com uma dose calculada de exposição ao mercado, equilibrando prudência com oportunidades de retorno."

export const Moderado = () => {
  return (
    <div className='container'>
        <img 
            src = {logo}
            className='logo'
            alt='logo'
        />
        <p>{textoUsuario}</p>
        <a href="#" className="button">Continuar</a>
    </div>
  )
}

export default Moderado