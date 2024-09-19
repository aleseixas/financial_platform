import React from 'react'
import '../styles/resultados.css'
import logo from '../Resources/cofre.png'

const textoUsuario = "Parabéns! De acordo com suas respostas no quiz, você se encaixa no perfil de investidor conservador. Isso significa que você valoriza a segurança e prefere evitar grandes riscos, priorizando a preservação do seu capital em vez de buscar retornos elevados. Seu foco está em investimentos mais estáveis e previsíveis, como títulos de renda fixa, CDBs e fundos conservadores, que tendem a oferecer maior segurança mesmo que a rentabilidade seja mais baixa. Esse perfil é ideal para quem busca tranquilidade financeira e tem um horizonte de longo prazo para alcançar seus objetivos com menos volatilidade."

export const Conservador = () => {
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

export default Conservador