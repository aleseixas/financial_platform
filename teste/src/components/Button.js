import React from 'react'
import '../styles/button.css'

const Button = ( { placeholder, handleSubmit, className} ) => {
  return (
    <button
        className={className}
        onClick={handleSubmit}>
        {placeholder}
    </button>
  )
}

export default Button