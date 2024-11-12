import React from 'react'

const Radio = ({ id, name, value, textLabel, onChange, checkCondition}) => {
  return (
    <>
      <label htmlFor={id}>
        <input
            type='radio'
            id = {id}
            name = {name}
            value={value}
            onChange={onChange}
            checked = {checkCondition}
        />
        {textLabel}
        </label>
    </>
  )
}

export default Radio