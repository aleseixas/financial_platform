import React, { useState } from 'react';
import '../styles/leitura.css';
import Navbar from '../components/Navbar';
import { getNoticiasFiltradas } from './TagsLeitura';

const noticiasFiltradas = getNoticiasFiltradas();

const Leitura = () => {

  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaNoticia = () => {
    if (indiceAtual < noticiasFiltradas.length - 1) {
      setIndiceAtual(indiceAtual + 1);
    }
  };

  const noticiaAnterior = () => {
    if (indiceAtual > 0) {
      setIndiceAtual(indiceAtual - 1);
    }
  };
  return (
    <>
    
    <div className="leitura-container">
      <h1>{noticiasFiltradas[indiceAtual].titulo}</h1>
      <h3>Por {noticiasFiltradas[indiceAtual].autor}</h3>
      <h3>{noticiasFiltradas[indiceAtual].dificuldade}</h3>
      <h3>Tags: {noticiasFiltradas[indiceAtual].tags}</h3>
      <div className="text-container">
        {/* Usando dangerouslySetInnerHTML para interpretar o HTML */}
        <p style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: noticiasFiltradas[indiceAtual].texto }} />
      </div>

      <div className="navigation-buttons">
        <button onClick={noticiaAnterior} disabled={indiceAtual === 0}>
          Anterior
        </button>

        <button onClick={proximaNoticia} disabled={indiceAtual === noticiasFiltradas.length - 1}>
          Próxima
        </button>
      </div>
    </div>
    </>
  )
}

export default Leitura