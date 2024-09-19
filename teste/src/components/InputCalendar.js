import React from 'react'

const InputCalendar = ({ id, name }) => {
  return (
    <>
        <input 
            type='date'
            id = {id}
            name = {name}
        />
    </> 
  )
}

export default InputCalendar