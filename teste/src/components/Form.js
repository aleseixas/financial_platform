import React from 'react'
import Field from './Field'
import Button from './Button'

const Form = () => {
    
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [erro, setErro] = React.useState(false);
    const [sucesso, setSucesso] = React.useState(false);


    const handleSubmit = ( event ) => {
        event.preventDefault();
        
        if (senha === '' || email === '') {
            setErro(true);
            setSucesso(false);
        
        } else {

            setSucesso(true);
            setErro(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Field 
                type='email'
                fieldName='email'
                value = {email}
                setValue={setEmail}
            />

            <Field 
                type = 'password'
                fieldName={'senha'}
                value = {senha}
                setValue={setSenha}
            />
            {erro && <p>
                    Houve um erro!
                </p>}
            <Button 
                handleSubmit = {handleSubmit}
                placeholder={'Submeter'}
            />
            {sucesso && <p>
                    Cadastro feito com sucesso!
                </p>}
        </form>
        
    )
}

export default Form