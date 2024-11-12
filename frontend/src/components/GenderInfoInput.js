import React from 'react'

const GenderInfoInput = ({ generValue, handleChange }) => {
  return (
    <>
      <Radio 
        id = 'masculino'
        name = 'gender'
        value = 'Masculino'
        onChange = {handleChange}
        checkCondition = {generValue === 'Masculino'}
        textLabel = 'Masculino'
      />
      <Radio 
        id = 'feminino'
        name = 'gender'
        value = 'Feminino'
        onChange = {handleChange}
        checkCondition = {generValue === 'Feminino'}
        textLabel = 'Feminino'
      />
      <Radio 
        id = 'personalizar'
        name = 'gender'
        value = 'Personalizar'
        onChange = {handleChange}
        checkCondition = {generValue === 'Personalizar'}
        textLabel = 'Personalizar'
      />
    </>
  )
}

export default GenderInfoInput