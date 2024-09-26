import React, { useState } from 'react';
import Button from '../components/Button';
import '../styles/login.css'
import logo from '../Resources/logo.png'
import Navbar from '../components/Navbar';
import DivAlinhamentoCentro from '../components/DivAlinhamentoCentro'
import { Link } from 'react-router-dom'
import SubmissionButton from '../components/SubmissionButton'


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

        <form className="register-form" onSubmit={handleSubmit}>

          <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={form.password}
            onChange={handleChange}
            required
          />

          </div>

        <SubmissionButton
          handleSubmit={handleSubmit} //trocar para uma função que lida com ir para a pag de criar conta
          placeholder={'Entrar'}
          className={'botaoEntrar'}   
        />

        <DivAlinhamentoCentro 
          reactComponentToBeAligned={
          <Button // imlementar onClick para enviar ele à página de recuperação de senha
          placeholder={'Esqueceu a senha?'}
          className={'botaoEsqueceuSenha'}
          />
          }
        />

        <DivAlinhamentoCentro 
          reactComponentToBeAligned={
          <SubmissionButton // implementar a navegação para a página de cadastro
          placeholder={
          <Link 
          to='/cadastro'
          style={{textDecoration: 'none', color: 'inherit'}}
          >Criar nova conta</Link>
          }
          className={'botaoCriarConta'}
          />
          }
        />  
            
        </form>
      </div>

    </>
  );
};

export default Login;