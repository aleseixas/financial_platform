import React from 'react'
import InputFieldText from './InputFieldText.js'

const UserNameComponent = ({firstNameValue, lastNameValue, handleChange}) => {
  return (
    <>
      <InputFieldText
        id = 'firstName'
        type="text"
        name="firstName"
        placeholder="Nome"
        value={firstNameValue}
        onChange={handleChange}
        required
      />
      <InputFieldText
        id = 'lastName'
        type="text"
        name="lastName"
        placeholder="Sobrenome"
        value={lastNameValue}
        onChange={handleChange}
        required
      />
    </>
  )
}

export default UserNameComponent