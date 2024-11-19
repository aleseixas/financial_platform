import React, { useState, useEffect } from 'react';
import '../styles/noticias.css';
import Navbar from '../components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Noticias = () => {
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(false); // Inicialmente, não está carregando
  const [showSaved, setShowSaved] = useState(false);
  const [searchTopic, setSearchTopic] = useState(null); // Nenhum tópico selecionado inicialmente

  const API_KEY = '7c520c989eaa447f97d0e1574136a102';
  const API_URL = (topic) =>
    `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;

  const topicsDictionary = {
    Finanças: 'finance',
    Criptomoedas: 'cryptocurrencies',
    Ações: 'stocks',
    'Renda fixa': 'fixed income',
    'Renda variável': 'variable income',
    'Análise quantitativa': 'quantitative analysis',
    Gestão: 'management',
    'Previsão de mercado': 'market forecasting',
    Risco: 'risk',
  };

  useEffect(() => {
    // Apenas busca notícias se um tópico tiver sido selecionado
    if (searchTopic) {
      const fetchNews = async () => {
        setLoading(true);
        try {
          const response = await fetch(API_URL(topicsDictionary[searchTopic]));
          const data = await response.json();
          setArticles(data.articles);
        } catch (error) {
          console.error('Erro ao buscar as notícias:', error);
        }
        setLoading(false);
      };

      fetchNews();
    }
  }, [searchTopic]);

  const toggleSaveArticle = (article) => {
    if (savedArticles.includes(article)) {
      setSavedArticles(savedArticles.filter((a) => a !== article));
    } else {
      setSavedArticles([...savedArticles, article]);
    }
  };

  const toggleShowSaved = () => {
    setShowSaved(!showSaved);
  };

  const displayedArticles = showSaved ? savedArticles : articles;

  return (
    <>
      <Navbar />
      <div className="news-container">
        <h1>Últimas notícias sobre {searchTopic || '...'}</h1>

        {/* Botões de tópicos para busca */}
        <div className="topic-buttons">
          {Object.keys(topicsDictionary).map((topic) => (
            <button key={topic} onClick={() => setSearchTopic(topic)}>
              {topic}
            </button>
          ))}
        </div>

        {/* Exibe o botão "Mostrar Notícias Salvas" apenas se um tópico foi selecionado */}
        {searchTopic && (
          <button className="botao-toggle" onClick={toggleShowSaved}>
            {showSaved ? 'Mostrar Todas as Notícias' : 'Mostrar Notícias Salvas'}
          </button>
        )}

        {/* Condicional para exibir notícias apenas se houver um tópico selecionado */}
        {searchTopic && (
          loading ? (
            <p>Carregando notícias...</p>
          ) : (
            displayedArticles.length > 0 ? (
              displayedArticles.map((article, index) => (
                <div className="news-item" key={index}>
                  <i
                    className={`fa ${savedArticles.includes(article) ? 'fas fa-bookmark' : 'far fa-bookmark'}`}
                    onClick={() => toggleSaveArticle(article)}
                    style={{ cursor: 'pointer', position: 'absolute', bottom: '15px', right: '25px', fontSize: '32px' }}
                  ></i>

                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="news-image"
                    />
                  )}
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Leia mais
                  </a>
                </div>
              ))
            ) : (
              <p>Nenhuma notícia encontrada para o tópico selecionado.</p>
            )
          )
        )}
      </div>
    </>
  );
};

export default Noticias;
