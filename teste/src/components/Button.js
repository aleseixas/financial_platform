import React from 'react'

const Button = ({ placeholder, handleClick, className }) => {
  return (
    <button
        className={className}
        onClick={handleClick}
    >
        {placeholder}
    </button>
  )
}

export default Button