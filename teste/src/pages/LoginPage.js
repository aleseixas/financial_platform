import React, { useState } from 'react';
import Button from '../components/Button';
import '../styles/login.css'
import logo from '../Resources/logo.png'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import FormLogin from '../components/FormLogin';

const Login = () => {

  return (
    <>
      <Navbar />
      <div className="login">
        <div classname = "form-container">
          <img src={logo} className='logo' alt='logo' />
          <p className='texto'>
          QuantifyEdu ajuda você a aprender e tomar decisões financeiras inteligentes com o poder da IA e da análise quantitativa.
          </p>
        </div>

        <FormLogin />
        
      </div>

    </>
  );
};

export default Login;