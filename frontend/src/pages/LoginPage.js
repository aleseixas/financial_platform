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
        <div>
          <img src={logo} className='logo' alt='logo' />
        </div>

        <FormLogin />
        
      </div>

    </>
  );
};

export default Login;