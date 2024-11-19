import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import Button from '../components/Button';
import '../styles/cadastro.css';
import Navbar from '../components/Navbar';
import UserNameComponent from '../components/UserNameComponent';
import LoginInfoInput from '../components/LoginInfoInput';
import UserDateInput from '../components/UserDateInput';
import GenderInfoInput from '../components/GenderInfoInput';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, birthDay, birthMonth, birthYear, gender } = form;

    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password, birthDay, birthMonth, birthYear, gender }),
    });
    console.log(JSON.stringify({ firstName, lastName, email, password, birthDay, birthMonth, birthYear, gender}));

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData);
      return;
    }

    const data = await response.json();
    // ifthere are no errors we redirect to the quiz page
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
            <UserNameComponent 
              firstNameValue = {form.firstName}
              lastNameValue = {form.lastName}
              handleChange = {handleChange}
            />
          </div>

          <LoginInfoInput 
            emailValue={form.email}
            passwordValue={form.password}
            handleChange={handleChange}
          />

          <div className="input-group">
            <UserDateInput 
              birthDayValue={form.birthDay}
              birthMonthValue={form.birthMonth}
              birthYearValue={form.birthYear}
              handleChange={handleChange}
            />
          </div>

          <div className="gender-group">
            <GenderInfoInput 
              generValue={form.gender}
              handleChange={handleChange}
            />
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
