import React from 'react'
import FieldCP from './FieldCP'
import Button from './Button'
import DivAlinhamentoCentro from './DivAlinhamentoCentro'
import '../styles/formCP.css'

const FormCP = () => {

    const [nome, setNome] = React.useState('');
    const [sobrenome, setSobrenome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [confirma, setConfirma] = React.useState('');
    const [dia, setDia] = React.useState('');
    const [mes, setMes] = React.useState('');
    const [ano, setAno] = React.useState('');
    const [masculino, setMasculino] = React.useState(false);
    const [feminino, setFeminino] = React.useState(false);
    const [personalizar, setPersonalizar] = React.useState(false);
    const [erro, setErro] = React.useState(false);
    const [sucesso, setSucesso] = React.useState(false);

    const handleSubmit = ( event ) => {
        event.preventDefault();
        let preencheuTodosOsCampos = (nome === '' || sobrenome === '' || email === '' || senha === '' || dia === '' || mes === '' || ano === '' || !masculino || !feminino || !personalizar);

        if (preencheuTodosOsCampos) {
            setErro(true);
            setSucesso(false);
        
        } else {

            setSucesso(true);
            setErro(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='formCP'>

            <FieldCP 
                type = 'text'
                subType = 'nome'
                value = {nome}
                setValue = {setNome}
            />

            <FieldCP
                type = 'text'
                subType = 'sobrenome'
                value = {sobrenome}
                setValue = {setSobrenome}
            />

            <FieldCP
                type = 'email'
                subType = 'email'
                value = {email}
                setValue = {setEmail}
            />

            <FieldCP
                type = 'password'
                subType = 'nova'
                value = {senha}
                setValue = {setSenha}
            />

            <FieldCP
                type = 'password'
                subType = 'confirma'
                value = {confirma}
                setValue = {setConfirma}
            />

            <FieldCP
                type = 'number'
                subType = 'dia'
                value = {dia}
                setValue = {setDia}
            />

            <FieldCP
                type = 'number'
                subType = 'mes'
                value = {mes}
                setValue = {setMes}
            />

            <FieldCP
                type = 'number'
                subType = 'ano'
                value = {ano}
                setValue = {setAno}
            />

            <FieldCP
                type = 'checkbox'
                subType = 'masculino'
                genero = 'Masculino'
                setValue = {setMasculino}
            />

            <FieldCP
                type = 'checkbox'
                subType = 'feminino'
                genero = 'Feminino'
                setValue = {setFeminino}
            />
            
            <FieldCP
                type = 'checkbox'
                subType = 'personalizar'
                genero = 'Personalizar'
                setValue = {setPersonalizar}
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

export default FormCP