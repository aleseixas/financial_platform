import React from 'react'

const Radio = ({ id, name, value, textLabel }) => {
  return (
    <>
        <input
            type='radio'
            id = {id}
            name = {name}
            value={value}
        />
        <label htmlFor={id}>{textLabel}</label>
    </>
  )
}

export default Radio