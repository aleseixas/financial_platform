import React, { useState } from 'react';
import '../styles/noticias.css';
import '../components/Navbar'
import Navbar from '../components/Navbar';

const Cursos = () => {
  const [loading, setLoading] = useState(false);
  const articles = [
    {
      title: 'Khan Academy',
      description: 'O curso de finanças da Khan Academy oferece uma introdução abrangente ao mundo das finanças, com conteúdos que abordam desde os conceitos básicos até temas mais avançados. Ele explora áreas como orçamento pessoal, investimentos, economia e a importância do planejamento financeiro. O curso é ideal para iniciantes que desejam adquirir uma base sólida em finanças pessoais e entender o impacto financeiro de suas decisões.',
      url: 'https://www.khanacademy.org/college-careers-more/personal-finance',
      urlToImage: 'https://midiasstoragesec.blob.core.windows.net/001/2024/03/khanacademy.png',
    },
    {
      title: 'McGill',
      description: 'O curso de finanças da Universidade McGill é projetado para fornecer uma base sólida em teoria financeira, bem como habilidades práticas aplicáveis a decisões de negócios e investimentos. Ele cobre tópicos essenciais, como avaliação de ativos, análise de investimentos, mercados financeiros, gestão de portfólio, e a estrutura de capital das empresas. Este curso é adequado para estudantes que desejam uma compreensão profunda das finanças e buscam se preparar para carreiras em consultoria, investimentos, gestão financeira e outras áreas relacionadas.',
      url: 'https://www.mcgillpersonalfinance.com',
      urlToImage: 'https://www.accueilplus.ca/wp-content/uploads/2020/08/mcgill-university-logo-png-transparent-cropped.png',
    },
    {
      title: 'Birmingham Young University',
      description: 'O curso de finanças da Universidade Brigham Young (BYU) é projetado para capacitar estudantes com uma compreensão ampla dos princípios financeiros e suas aplicações práticas. O curso aborda temas fundamentais, como análise de investimentos, gestão de risco, finanças corporativas, mercados financeiros, e planejamento de investimentos pessoais. Com ênfase na ética e na tomada de decisões informadas, os alunos exploram como avaliar empresas, realizar análise financeira, estruturar portfólios, e compreender o funcionamento do sistema financeiro global.',
      url: 'https://personalfinance.byu.edu',
      urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Brigham_Young_University_logo.svg/2560px-Brigham_Young_University_logo.svg.png',
    },
    {
      title: 'Academia do Dinheiro - MSE',
      description: 'Parceira entre o MSE e o Open University, oferece cursos gratuitos sobre dinheiro. Ele cobre temas como economia financeira, avaliação de ativos, finanças corporativas, gestão de portfólios e mercados globais. Com um enfoque interdisciplinar, o curso explora o impacto das finanças na economia e sociedade, introduzindo os alunos às ferramentas necessárias para análise financeira e tomada de decisões estratégicas. Voltado para estudantes e profissionais que desejam desenvolver competências robustas em finanças, o curso prepara para carreiras em consultoria, análise financeira, bancos e investimentos.',
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