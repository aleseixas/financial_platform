import React, { useState } from 'react';
import '../styles/leitura.css';
import Navbar from '../components/Navbar';

const Leitura = () => {
  const [searchTag, setSearchTag] = useState('');
  const [nivel, setNivel] = useState(null); // Estado para o nível selecionado, inicia como null
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [showContent, setShowContent] = useState(false); // Estado para controlar a exibição do conteúdo

  const Tags = [
    "Finanças",
    "Mercado Financeiro",
    "Conceitos",
    "Ações",
    "Criptomoedas",
    "Renda Fixa",
    "Poupança",
    "Câmbio",
    "Investimentos"
  ];
  
  const noticias = [
    {
      titulo: "Notícia 1",
      autor: "Autor 1",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      titulo: "Notícia 2",
      autor: "Autor 2",
      texto: "Texto da notícia 2. Vivamus euismod mauris quis nisl feugiat efficitur."
    },
    {
      titulo: "Notícia 3",
      autor: "Autor 3",
      texto: "Texto da notícia 3. Morbi sodales magna ac mi faucibus, at facilisis libero venenatis."
    },
  ];

  const proximaNoticia = () => {
    if (indiceAtual < noticias.length - 1) {
      setIndiceAtual(indiceAtual + 1);
    }
  };

  const noticiaAnterior = () => {
    if (indiceAtual > 0) {
      setIndiceAtual(indiceAtual - 1);
    }
  };

  // Texto específico para cada nível
  const textosDeNivel = {
    Iniciante: "Bem-vindo ao nível Iniciante! Este é um ótimo lugar para começar sua jornada.",
    Intermediário: "Você está no nível Intermediário. Continue assim para aprofundar seus conhecimentos.",
    Avançado: "Nível Avançado! Prepare-se para conteúdos mais complexos e desafiadores."
  };

  return (
    <>
      <Navbar />

      <div className="tag-buttons">
        {Tags.map((topic) => (
          <button key={topic} onClick={() => setSearchTag(topic)}>
            {topic}
          </button>
        ))}
      </div>

      {/* Adicionando os botões de nível */}
      <div className="nivel-buttons">
        <button onClick={() => setNivel("Iniciante")}>Iniciante</button>
        <button onClick={() => setNivel("Intermediário")}>Intermediário</button>
        <button onClick={() => setNivel("Avançado")}>Avançado</button>
      </div>

      {/* Renderização Condicional do Texto do Nível Selecionado */}
      {nivel && (
        <div className="nivel-texto">
          <p>{textosDeNivel[nivel]}</p>
        </div>
      )}

      {/* Renderização Condicional do Conteúdo da Notícia */}
      {showContent && (searchTag || nivel) && (
        <div className="leitura-container">
          <h1>{noticias[indiceAtual].titulo}</h1>
          <h3>Por {noticias[indiceAtual].autor}</h3>
          <div className="text-container">
            <p>{noticias[indiceAtual].texto}</p>
          </div>
          
          <div className="navigation-buttons">
            <button onClick={noticiaAnterior} disabled={indiceAtual === 0}>
              Anterior
            </button>
            <button onClick={proximaNoticia} disabled={indiceAtual === noticias.length - 1}>
              Próxima
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Leitura;
