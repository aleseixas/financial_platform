import React from 'react'

const Checkbox = ({ id, name, value, textLabel}) => {
  return (
    <>
        <input 
            type='checkbox'
            id = {id}
            name = {name}
            value = {value}
        />
        <label htmlFor={id}>{textLabel}</label>
    </>
  )
}

export default Checkbox