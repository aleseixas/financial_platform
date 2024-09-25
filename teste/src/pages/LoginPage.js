import React from 'react'
import '../styles/login.css'
import logo from '../Resources/logo.png'
import Form from '../components/Form'
import Navbar from '../components/Navbar'

const LoginPage = () => {
  return (
    <>
      <Navbar/>
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
      </>
  )
}

export default LoginPage