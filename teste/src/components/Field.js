import React from 'react'
import { useState } from 'react'

const Field = ( { type , fieldName, value, setValue} ) => {
    
    const handleChange = ( event ) => {
        setValue(event.target.value);
    }

    return (<div>
      <input 
          type={type} 
          onChange={handleChange} 
          placeholder= {"Insira seu " + {fieldName}}
          value={value}
      />
      <p>{value}</p>  
      </div>
  )
}

export default Field