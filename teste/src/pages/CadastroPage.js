import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import Button from '../components/Button';
import '../styles/cadastro.css';
import Navbar from '../components/Navbar';

const Cadastro = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: '',
  });

  const navigate = useNavigate();  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de submissão do formulário aqui
    // console.log(form);

    // Redireciona para a página de perguntas
    navigate('/quiz');
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Cadastre-se</h2>
          <p>é rápido e fácil</p>

          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="Nome"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Sobrenome"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>

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

          <div className="input-group">
            <input
              type="text"
              name="birthDay"
              placeholder="Dia"
              value={form.birthDay}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="birthMonth"
              placeholder="Mes"
              value={form.birthMonth}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="birthYear"
              placeholder="Ano"
              value={form.birthYear}
              onChange={handleChange}
              required
            />
          </div>

          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Masculino"
                checked={form.gender === 'Masculino'}
                onChange={handleChange}
              />
              Masculino
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Feminino"
                checked={form.gender === 'Feminino'}
                onChange={handleChange}
              />
              Feminino
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Personalizar"
                checked={form.gender === 'Personalizar'}
                onChange={handleChange}
              />
              Personalizar
            </label>
          </div>
          
          <Button
            handleSubmit={handleSubmit}
            placeholder={'Cadastra-se'}
            className={'submit-btn'}   
          />
        </form>
      </div>
    </>
  );
};

export default Cadastro;
