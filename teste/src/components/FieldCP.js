import React from 'react'
import '../styles/fieldCP.css'

const placeholders = {
    'text': {
        'nome': 'Nome',
        'sobrenome': 'Sobrenome'
    },
    'email' : {
        'email': 'Email'
    },
    'password': {
        'nova': 'Nova senha',
        'confirma': 'Confirmar senha'
    },
    'number' : {
        'dia': 'Dia',
        'mes': 'Mês',
        'ano': 'Ano'
    },
    'checkbox' : {
        'masculino': 'Masculino',
        'feminino': 'Feminino',
        'personalizar': 'Personalizar'
    }
};

const Field = ( { type, subType, value, setValue, genero} ) => {
    
    const handleChange = ( event ) => {
        setValue(event.target.value);
    }

    if (type === 'checkbox') return (
        <div>
            <input className='field'
                type={type} 
                onChange={handleChange} 
            />
            <label style={{color:'black'}}>
                {genero}
            </label>
        </div>
    ) 

    return (<div>
      <input className='field'
          type={type} 
          onChange={handleChange} 
          placeholder= {placeholders[type][subType]}
          value={value}
      />
      </div>
  )
}

export default Field