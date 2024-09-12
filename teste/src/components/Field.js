import React from 'react'
import '../Styles/field.css'

const placeholders = {
    'email': 'Email',
    'password': 'Senha'
};

const Field = ( { type, value, setValue } ) => {
    
    const handleChange = ( event ) => {
        setValue(event.target.value);
    }

    return (<div>
      <input className='field'
          type={type} 
          onChange={handleChange} 
          placeholder= {placeholders[type]}
          value={value}
      />
      <p>{value}</p>  
      </div>
  )
}

export default Field