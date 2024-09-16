import React from 'react'
import '../styles/login.css'
import logo from '../Resources/logo.png'
import Form from '../components/Form'

const LoginPage = () => {
  return (
    <div className='login'>
        <div>
          <img 
              src={logo}
              className='logo'
              alt='logo'
          />
        </div>
        
        <Form />
    </div>
  )
}

export default LoginPage