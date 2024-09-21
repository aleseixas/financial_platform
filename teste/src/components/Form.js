import React from 'react'
import InputFieldText from './InputFieldText'
import SubmissionButton from './SubmissionButton'
import DivAlinhamentoCentro from './DivAlinhamentoCentro'
import '../styles/form.css'
import Button from './Button'
import { Link } from 'react-router-dom'

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

            <InputFieldText 
                className={'field'}
                type={'email'}
                value = {email}
                setValue={setEmail}
                placeholder={'Email'}
            />
            
            <InputFieldText 
                className={'field'}
                type = 'password'
                value = {senha}
                setValue={setSenha}
                placeholder={'Senha'}
            />
            
            <SubmissionButton 
                placeholder={'Entrar'}
                className={'botaoEntrar'}
            />
            
            <DivAlinhamentoCentro 
                reactComponentToBeAligned={
                    <Button // imlementar onClick para enviar ele à página de recuperação de senha
                        placeholder={'Esqueceu a senha?'}
                        className={'botaoEsqueceuSenha'}
                    />
                }
            />

            <DivAlinhamentoCentro 
                reactComponentToBeAligned={
                    <Button // implementar a navegação para a página de cadastro
                        placeholder={
                            <Link 
                                to='/cadastro'
                                style={{textDecoration: 'none', color: 'inherit'}}
                            >Criar nova conta</Link>
                        }
                        className={'botaoCriarConta'}
                    />
                }
            />            
        </form>
        
    )
}

export default Form;