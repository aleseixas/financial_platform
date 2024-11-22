import React, { useState, useEffect } from 'react';
import '../styles/noticias.css';
import Navbar from '../components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Noticias = () => {
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [searchTopic, setSearchTopic] = useState('Finanças'); // Tópico inicial definido como "Finanças"

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

  // Carregar artigos salvos do localStorage ao montar o componente
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedArticles')) || [];
    setSavedArticles(saved);
  }, []);

  useEffect(() => {
    const fetchAllNews = async () => {
      setLoading(true);
      try {
        const allArticles = [];
        for (const topic in topicsDictionary) {
          const response = await fetch(API_URL(topicsDictionary[topic]));
          const data = await response.json();
          allArticles.push(...data.articles);
        }
        setArticles(allArticles);
      } catch (error) {
        console.error('Erro ao buscar as notícias:', error);
      }
      setLoading(false);
    };

    if (!searchTopic) {
      fetchAllNews();
    } else {
      const fetchTopicNews = async () => {
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
      fetchTopicNews();
    }
  }, [searchTopic]);

  // Função para salvar/remover artigos e atualizar o localStorage
  const toggleSaveArticle = (article) => {
    const updatedSavedArticles = savedArticles.includes(article)
      ? savedArticles.filter((a) => a.url !== article.url) // Remover se já estiver salvo
      : [...savedArticles, article]; // Adicionar se não estiver salvo
    setSavedArticles(updatedSavedArticles);
    localStorage.setItem('savedArticles', JSON.stringify(updatedSavedArticles));
  };

  const toggleShowSaved = () => {
    setShowSaved(!showSaved);
  };

  const displayedArticles = showSaved ? savedArticles : articles;

  return (
    <>
      <Navbar />
      <div className="news-container">
        <h1>Últimas notícias sobre {searchTopic || 'todos os tópicos'}</h1>

        {/* Botões de tópicos para busca */}
        <div className="topic-buttons">
          {Object.keys(topicsDictionary).map((topic) => (
            <button key={topic} onClick={() => setSearchTopic(topic)}>
              {topic}
            </button>
          ))}
        </div>

        <button className="botao-toggle" onClick={toggleShowSaved}>
          {showSaved ? 'Mostrar Todas as Notícias' : 'Mostrar Notícias Salvas'}
        </button>

        {loading ? (
          <p>Carregando notícias...</p>
        ) : (
          displayedArticles.length > 0 ? (
            displayedArticles.map((article, index) => (
              <div className="news-item" key={index}>
                <i
                  className={`fa ${
                    savedArticles.some((a) => a.url === article.url) ? 'fas fa-bookmark' : 'far fa-bookmark'
                  }`}
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
        )}
      </div>
    </>
  );
};

export default Noticias;
