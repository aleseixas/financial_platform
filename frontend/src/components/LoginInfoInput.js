import React from 'react'
import InputFieldText from './InputFieldText'

const LoginInfoInput = ({ emailValue, passwordValue, handleChange }) => {
  return (
    <>
      <InputFieldText
        id = 'email'
        type="email"
        name="email"
        placeholder="Email"
        value={emailValue}
        onChange={handleChange}
        required
      />

      <InputFieldText
        id = 'password'
        type="password"
        name="password"
        placeholder="Senha"
        value={passwordValue}
        onChange={handleChange}
        required
      />
    </>
  )
}

export default LoginInfoInput