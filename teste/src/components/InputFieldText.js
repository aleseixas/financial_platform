import React from 'react'
import '../styles/inputfieldtext.css'

const InputFieldText = ( { type, value, setValue, className, placeholder} ) => {
    
    const handleChange = ( event ) => {
        setValue(event.target.value);
    }

    return (<>
      <input className={className}
          type={type}
          onChange={handleChange} 
          placeholder= {placeholder}
          value={value}
      />
      </>
  )
}

export default InputFieldText