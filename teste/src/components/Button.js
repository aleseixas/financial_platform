import React from 'react'

const Button = ({ onClick, placeholder, className }) => {
  return (
    <button
        className={className}
        onClick={onClick}
    >
        {placeholder}
    </button>
  )
}

export default Button