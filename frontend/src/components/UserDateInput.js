import React from 'react'
import InputFieldText from './InputFieldText'

const UserDateInput = ({birthDayValue, birthMonthValue, birthYearValue, handleChange}) => {
  return (
    <>
      <InputFieldText
        id = 'birthDay'
        type="text"
        name="birthDay"
        placeholder="Dia"
        value={birthDayValue}
        onChange={handleChange}
        required
      />
      <InputFieldText
        id = 'birthMonth'
        type="text"
        name="birthMonth"
        placeholder="Mes"
        value={birthMonthValue}
        onChange={handleChange}
        required
      />
      <InputFieldText
        id = 'birthYear'
        type="text"
        name="birthYear"
        placeholder="Ano"
        value={birthYearValue}
        onChange={handleChange}
        required
      />     
    </>
  )
}

export default UserDateInput