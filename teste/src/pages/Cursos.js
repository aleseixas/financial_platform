import React, { useEffect, useState } from 'react';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [error, setError] = useState(null);

  // Credenciais OAuth2
  const client_id = 'b70X9jewuanO95XGG4W9ctVJJSvIVkKE2pqIIzvn2LbRJUNB';  // Substitua pelo seu Client ID
  const client_secret = 'KvTubvLbXs3U1e7VlITeoPcRr2bCbxrCZzIvQGKNU3ElodctGEVB9sgxaT2HcGI8';  // Substitua pelo seu Client Secret

  // Função para obter o token OAuth2
  const getToken = async () => {
    const tokenUrl = 'https://api.coursera.com/oauth2/client_credentials/token';
    const data = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: client_id,
      client_secret: client_secret,
    });

    
    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error(`Erro ao obter o token: ${response.statusText}`);
      }

      const tokenData = await response.json();
      return tokenData.access_token;
    } catch (error) {
      setError('Erro ao obter token');
      console.error(error.message);
    }
  };

  // Função para buscar cursos de análise quantitativa
  const getCursosDeAnaliseQuantitativa = async (token) => {
    const searchUrl = 'https://api.coursera.org/api/courses.v1?q=search&query=análise%20quantitativa';

    try {
      const response = await fetch(searchUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar cursos: ${response.statusText}`);
      }

      const data = await response.json();
      setCursos(data.elements);  // Atualiza o estado com os cursos recebidos
    } catch (error) {
      setError('Erro ao buscar cursos');
      console.error(error.message);
    }
  };

  // useEffect para rodar na montagem do componente
  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();
      console.log('Token obtido:', token);  // Verifique se o token está correto
      if (token) {
        await getCursosDeAnaliseQuantitativa(token);
      }
    };
    fetchData();
  }, []);  // Esse array vazio [] faz com que o useEffect rode apenas uma vez na montagem

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Cursos sobre Análise Quantitativa</h1>
      {cursos.length > 0 ? (
        <ul>
          {cursos.map((curso) => (
            <li key={curso.id}>{curso.name}</li>
          ))}
        </ul>
      ) : (
        <p>Carregando cursos...</p>
      )}
    </div>
  );
};

export default Cursos;
