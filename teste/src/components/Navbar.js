import React from 'react'
import logosymbol from '../Resources/logosymbol.png'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const navigationBar = [

    {
        'name': 'Home',
        'path': '/home',
        'className': 'normalLink',
    },

    {
        'name': 'Profile',
        'path': '/profile',
        'className': 'normalLink'
    },  

    {
        'name': 'Cursos',
        'path': '/cursos',
        'className': 'normalLink'
    },

    {
        'name': 'QuantBot',
        'path': '/quantBot',
        'className': 'normalLink'
    },

    {
        'name': 'Exercicios',
        'path': '/exercicios',
        'className': 'normalLink'
    },

    {
        'name': 'Leitura',
        'path': '/leitua',
        'className': 'normalLink'
    },

    {
        'name': 'Noticias',
        'path': '/noticias',
        'className': 'normalLink'
    },

    {
        'name': 'Cadastro',
        'path': '/cadastro',
        'className': 'cadastro-btn'
    },

    {
        'name': 'Entrar',
        'path': '/login',
        'className': 'entrar-btn'

    },

]

const Navbar = () => {
  return (
    <header className='header'>
        <div className='imagem'>
            <img 
                style={{
                    float: 'left',
                    boxSizing:'border-box',
                    height:'100%'
                }}
                src={logosymbol}
                alt='simbolo'
                />
        </div>
        <nav>
            <ul className='navbar-list'>
                {
                    navigationBar.map((item) => 
                        <li id={item['path']} className='navbar-link'>
                            <Link to={item['path']} className={item['className']}>{item['name']}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    </header>
  )
}

export default Navbar