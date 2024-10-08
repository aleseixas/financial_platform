import React, { useState } from 'react';
import '../styles/profilepage.css';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import InputFieldText from '../components/InputFieldText'; // Importando o componente de input personalizado

const ProfilePage = () => {
  // Estado para controlar se estamos no modo de edição ou não
  const [editando, setEditando] = useState(false);

  // Estado para armazenar os valores do perfil
  const [perfil, setPerfil] = useState({
    nome: 'João Silva',
    email: 'joao.silva@example.com',
    dataNascimento: '15/08/1990',
    genero: 'Masculino'
  });

  // Função para alternar entre modo de edição e visualização
  const handleEditClick = () => {
    setEditando((prevEditando) => !prevEditando); // Alterna entre true e false
  };

  // Função para lidar com a mudança nos campos de input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerfil((prevPerfil) => ({
      ...prevPerfil,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <h2>Meu Perfil</h2>

          {/* Renderizando os campos de texto ou inputs, dependendo se está editando */}
          {editando ? (
            <>
              <p>
                <strong>Nome:</strong>
                <InputFieldText
                  id="nome"
                  name="nome"
                  value={perfil.nome}
                  placeholder="Digite seu nome"
                  onChange={handleInputChange}
                />
              </p>
              <p>
                <strong>Email:</strong>
                <InputFieldText
                  id="email"
                  name="email"
                  value={perfil.email}
                  placeholder="Digite seu email"
                  onChange={handleInputChange}
                />
              </p>
              <p>
                <strong>Data de Nascimento:</strong>
                <InputFieldText
                  id="dataNascimento"
                  name="dataNascimento"
                  value={perfil.dataNascimento}
                  placeholder="Digite sua data de nascimento"
                  onChange={handleInputChange}
                />
              </p>
              <p>
                <strong>Gênero:</strong>
                <InputFieldText
                  id="genero"
                  name="genero"
                  value={perfil.genero}
                  placeholder="Digite seu gênero"
                  onChange={handleInputChange}
                />
              </p>
            </>
          ) : (
            // Modo de visualização dos dados
            <>
              <p><strong>Nome:</strong> {perfil.nome}</p>
              <p><strong>Email:</strong> {perfil.email}</p>
              <p><strong>Data de Nascimento:</strong> {perfil.dataNascimento}</p>
              <p><strong>Gênero:</strong> {perfil.genero}</p>
            </>
          )}

          <Button 
            onClick={handleEditClick} // Alterna entre edição e visualização
            placeholder={editando ? 'Salvar' : 'Editar'} // Muda o texto do botão
            className={'btn_editar'}
          />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
