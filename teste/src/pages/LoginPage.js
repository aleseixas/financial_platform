import React from 'react'
import '../Styles/login.css'
import logo from '../Resources/logo.png'
import Form from '../Components/Form'

const LoginPage = () => {
  return (
    <div className='login'>
        <img 
            src={logo}
            className='logo'
            alt='logo'
        />
        <Form />
    </div>
  )
}

export default LoginPage