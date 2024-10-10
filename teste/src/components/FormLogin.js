import React, { useState } from 'react';
import InputFieldText from './InputFieldText'
import SubmissionButton from './SubmissionButton'
import DivAlinhamentoCentro from './DivAlinhamentoCentro'
import '../styles/form.css'
import Button from './Button'
import { Link } from 'react-router-dom'

const FormLogin = () => {
    const [form, setForm] = useState({
        'email': '',
        'senha': ''
    });
    
    const handleSubmit = ( event ) => {
        event.preventDefault();
        // implementar logica de submissao
    }

    const handleChange = (event) =>  { 
        const {name, value} = event.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <form onSubmit={handleSubmit} className='form'>

            <InputFieldText 
                id={'email'}
                className={'field'}
                type={'email'}
                value = {form['email']}
                onChange={handleChange}
                placeholder={"Email"}
                required
            />
            
            <InputFieldText 
                id={'password'}
                className={'field'}
                type = 'password'
                value = {form['senha']}
                onChange={handleChange}
                placeholder={'Senha'}
                required
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

export default FormLogin;