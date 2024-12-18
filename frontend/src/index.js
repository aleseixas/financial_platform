import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/LoginPage';
import Cadastro from './pages/CadastroPage';
import Perguntas from './pages/Perguntas';
import ResultadosQuiz from './pages/ResultadosQuiz';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import Cursos from './pages/Cursos';
import Leitura from './pages/Leitura';
import QuantBot from './pages/QuantBot';
import Noticias from './pages/Noticias';
import TagsLeitura from './pages/TagsLeitura';
import Descricoes from './pages/Descricoes';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: '/cadastro',
    element: <Cadastro/>
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  
  {
    path: '/quiz',
    element: <Perguntas/>
  },
  {
    path: '/resultados',
    element: <ResultadosQuiz/>
  },

  {
    path: '/profile',
    element: <ProfilePage/>
  },
  {
    path: '/home',
    element : <HomePage />
  },
  {
    path: '/Noticias',
    element: <Noticias/>
  },
  {
    path: '/Cursos',
    element: <Cursos/>
  },
  {
    path: '/leitura',
    element : <TagsLeitura />
  },
  {
    path: '/textos',
    element: <Leitura/>
  },
  {
    path: '/quantbot',
    element : <QuantBot />
  },
  {
    path: '/descricoes',
    element : <Descricoes/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
