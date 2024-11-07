import React from 'react'

const Radio = ({ id, name, value, textLabel, onChange}) => {
  return (
    <>
        <input
            type='radio'
            id = {id}
            name = {name}
            value={value}
            onChange={onChange}
        />
        <label htmlFor={id}>{textLabel}</label>
    </>
  )
}

export default Radio