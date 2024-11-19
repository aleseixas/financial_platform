import React, { useState, useEffect } from 'react';
import '../styles/noticias.css';
import Navbar from '../components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Noticias = () => {
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]); // Estado para artigos salvos
  const [loading, setLoading] = useState(true);

  const API_KEY = '7c520c989eaa447f97d0e1574136a102';
  const API_URL = `https://newsapi.org/v2/everything?q=stock%20market%20AND%20quantitative%20analysis&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar as notícias:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Função para salvar/remover artigo
  const toggleSaveArticle = (article) => {
    if (savedArticles.includes(article)) {
      setSavedArticles(savedArticles.filter((a) => a !== article));
    } else {
      setSavedArticles([...savedArticles, article]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="news-container">
        <h1>Últimas notícias sobre Bolsa de Valores e Análise Quantitativa</h1>
        {loading ? (
          <p>Carregando notícias...</p>
        ) : (
          articles.map((article, index) => (
            <div className="news-item" key={index}>
              {/* Ícone de bookmark para salvar/remover */}
              <i
                className={`fa ${savedArticles.includes(article) ? 'fas fa-bookmark' : 'far fa-bookmark'}`}
                onClick={() => toggleSaveArticle(article)}
                style={{ cursor: 'pointer', position: 'absolute', bottom: '15px', right: '25px',fontSize:'32px' }}
              ></i>
              
              {/* Exibindo a imagem da notícia */}
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
        )}
      </div>
    </>
  );
};

export default Noticias;
