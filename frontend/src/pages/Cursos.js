import React, { useState } from 'react';
import '../styles/noticias.css';
import '../components/Navbar'
import Navbar from '../components/Navbar';

const Cursos = () => {
  const [loading, setLoading] = useState(false);
  const articles = [
    {
      title: 'Khan Academy',
      description: 'Curso financeiro gratuito do Khan Academy.',
      url: 'https://www.khanacademy.org/college-careers-more/personal-finance',
      urlToImage: 'https://midiasstoragesec.blob.core.windows.net/001/2024/03/khanacademy.png',
    },
    {
      title: 'Academia do Dinheiro - MSE',
      description: 'Parceira entre o MSE e o Open University, oferece cursos gratuitos sobre dinheiro.',
      url: 'https://www.open.edu/openlearn/money-business/mses-academy-money/content-section-overview?active-tab=description-tab',
      urlToImage: 'https://www.open.edu/openlearn/8e/60/8e60ffb037949abe29dad7791b3747a15c001b17?response-content-disposition=inline%3Bfilename%3D%22f3.png%22&response-content-type=image%2Fpng&Expires=1732036620&Signature=WRPcxZjlsIakPMVnQ0XPLPOGyaKeyPdjxKu58zkwLbLkLbHx1Z8d9-clMefA8cVNbWfscQhzeRwK4LMgxfx-JjAJ~lKel-oomRPWw0cLBkTJvGzUJVdCu-ggfjtHLPYBzCHNgjHk73Ri-r3cP0YVmTMyounxmA7A2dMmPs0whJ86vgjcgCfPQOE6fJi14A0~2w~EKZXbeOQ2DQPMt-LGB-Wnwhi0TR5HwdF8XnKerZ9YIp5Bt6mDPrqPtdr2caGO4~~Z~Bk4QO6KNEWIRo7WE3pU1PmhqeZ0O4A1KNuOW~FAd3R2Tet40K8QPEjPHL8kxcwX4RGOwMdlJGO6OCIaeA__&Key-Pair-Id=K87HJKWMK329B',
    },
    // Add more articles as needed
  ];

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

export default Cursos;