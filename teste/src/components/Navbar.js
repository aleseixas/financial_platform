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
        'name': 'Entrar',
        'path': '/login',
        'className': 'normalLink'

    },

    {
        'name': 'Cadastro',
        'path': '/cadastro',
        'className': 'normalLink'
    },
]

const Navbar = () => {
  return (
    <header>
        <nav>
            <div className='imagem'>
                <img 
                    src={logosymbol}
                    alt='simbolo'
                />
                <ul>
                {
                    navigationBar.map((item) => 
                        <li id={item['path']}>
                            <Link to={item['path']} className={item['className']}>{item['name']}</Link>
                        </li>
                    )
                }
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar