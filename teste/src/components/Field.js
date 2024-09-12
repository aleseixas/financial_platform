import React from 'react'
import '../Styles/field.css'

const Field = ( { type , fieldName, value, setValue} ) => {
    
    const handleChange = ( event ) => {
        setValue(event.target.value);
    }

    return (<div>
      <input className='field'
        
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