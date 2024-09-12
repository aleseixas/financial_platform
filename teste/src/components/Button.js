import React from 'react'
import '../Styles/button.css'

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