import React from 'react'
import Field from './Field'
import Button from './Button'
import DivAlinhamentoCentro from './DivAlinhamentoCentro'
import '../Styles/form.css'

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
        <form onSubmit={handleSubmit} className='form'>
            <Field 
                type='email'
                value = {email}
                setValue={setEmail}
            />

            <Field 
                type = 'password'
                value = {senha}
                setValue={setSenha}
            />
            <Button 
                handleSubmit = {handleSubmit} // funcao para logar o usuario
                placeholder={'Entrar'}
                className={'botaoEntrar'}
            />
            <DivAlinhamentoCentro 
                reactComponentToBeAligned={
                    <Button
                        handleSubmit={handleSubmit} //trocar para uma função que lida com esquecer a senha
                        placeholder={'Esqueceu a senha?'}
                        className={'botaoEsqueceuSenha'}
                    />
                }
            />

            <DivAlinhamentoCentro 
                reactComponentToBeAligned={
                    <Button 
                        handleSubmit={handleSubmit} //trocar para uma função que lida com ir para a pag de criar conta
                        placeholder={'Criar nova conta'}
                        className={'botaoCriarConta'}   
                    />
                }
            />            
        </form>
        
    )
}

export default Form;