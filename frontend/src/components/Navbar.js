import React from 'react'
import logosymbol from '../Resources/logosymbol.png'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

const navigationBar = [
    {
        'name': 'Home',
        'path': '/home',
        'className': 'normalLink'
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
        'name': 'Leitura',
        'path': '/leitura',
        'className': 'normalLink'
    },

    {
        'name': 'Noticias',
        'path': '/noticias',
        'className': 'normalLink'
    },
    {
        'name': 'Quiz',
        'path': '/quiz',
        'className': 'normalLink'
    },

    {
        'name': 'Login',
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
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/logout', {
        method: 'GET', // This is the default, so you can omit it
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      navigate('/login');

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };  


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
        <div className='logout'>
            <Link onClick={(e) => { e.preventDefault(); handleClick();}} className='logoutLink'>Logout</Link>            
        </div>
    </header>
  )
}

export default Navbar