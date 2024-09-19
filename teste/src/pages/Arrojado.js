import React from 'react'
import '../styles/resultados.css'
import logo from '../Resources/ganho.png'

const textoUsuario = "Parabéns! De acordo com o quiz, você tem o perfil de investidor arrojado. Isso significa que você está disposto a correr mais riscos em busca de maiores retornos. Você aceita a volatilidade do mercado e está confortável com investimentos que podem ter grandes variações no curto prazo, desde que tenham potencial de ganhos elevados no longo prazo. Seu portfólio tende a incluir uma maior proporção de ativos de renda variável, como ações, fundos de investimentos mais agressivos, e até mesmo criptomoedas. Esse perfil é ideal para quem busca crescimento rápido e tem uma boa tolerância ao risco."

export const Arrojado = () => {
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

export default Arrojado