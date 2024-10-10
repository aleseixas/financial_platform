import React, { useState } from 'react';
import Button from '../components/Button';
import '../styles/login.css'
import logo from '../Resources/logo.png'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import FormLogin from '../components/FormLogin';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de submissão do formulário
    // console.log(form);
  };

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