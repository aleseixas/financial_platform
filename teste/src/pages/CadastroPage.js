import React, { useState } from 'react';
import Button from '../components/Button';
import '../styles/cadastro.css'

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
    console.log(form);
  };

  return (
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
          placeholder="Celular ou email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Nova senha"
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
            placeholder="Mês"
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
        handleSubmit={handleSubmit} //trocar para uma função que lida com ir para a pag de criar conta
        placeholder={'Cadastre-se'}
        className={'submit-btn'}   
        />

      </form>
    </div>
  );
};

export default Cadastro;
