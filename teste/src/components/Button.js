import React from 'react'

const Button = ( { placeholder, handleSubmit} ) => {
  return (
    <button onClick={handleSubmit}>
        {placeholder}
    </button>
  )
}

export default Button