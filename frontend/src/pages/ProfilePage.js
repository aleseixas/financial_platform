import React, { useState } from 'react';
import '../styles/profilepage.css';
import Navbar from '../components/Navbar';  
import Button from '../components/Button';

const ProfilePage = () => {
  // Estado para controlar se está em modo de edição ou não
  const [editando, setEditando] = useState(false);

  // Estados para armazenar os valores dos campos do perfil
  const [nome, setNome] = useState('João Silva');
  const [email, setEmail] = useState('joao.silva@example.com');
  const [dataNascimento, setDataNascimento] = useState('15/08/1990');
  const [genero, setGenero] = useState('Masculino');
  const[tipo_investidor,setTipoInvestidor] = useState('Moderado')

  // Função para alternar entre modo de edição e modo de visualização
  const handleEditClick = () => {
    setEditando((prevEditando) => !prevEditando); // Alterna entre true e false
  };

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <h2>Meu Perfil</h2>

          {editando ? (
            <>
              <p>
                Nome: <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
              </p>
              <p>
                Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </p>
              <p>
                Data de Nascimento: <input type="text" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
              </p>
              <p>
                Gênero: 
                <select value={genero} onChange={(e) => setGenero(e.target.value)}>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </select>
              </p>

              <p>
                Tipo Investidor:
                <select value = {tipo_investidor} onChange={(e) => setTipoInvestidor(e.target.value)}>
                  <option value="Conservador">Conservador</option>
                  <option value="Moderado">Moderado</option>
                  <option value="Arrojado">Arrojado</option>
                </select>
              </p>
            </>
          ) : (
            <>
              <p>Nome: {nome}</p>
              <p>Email: {email}</p>
              <p>Data de Nascimento: {dataNascimento}</p>
              <p>Gênero: {genero}</p>
              <p>Tipo Investidor: {tipo_investidor}</p>
              
            </>
          )}

          <Button 
            onClick={handleEditClick} // Adicionando o evento de clique
            placeholder={editando ? 'Salvar' : 'Editar'} // Muda o texto do botão
            className={'btn_editar'}
          />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
