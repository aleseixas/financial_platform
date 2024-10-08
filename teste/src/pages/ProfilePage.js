import React, { useState } from 'react';
import '../styles/profilepage.css';
import Navbar from '../components/Navbar';  
import Button from '../components/Button';

const ProfilePage = () => {
  // Estado para controlar se está em modo de edição ou não
  const [editando, setEditando] = useState(false);

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
          <p>Nome: João Silva</p>
          <p>Email: joao.silva@example.com</p>
          <p>Data de Nascimento: 15/08/1990</p>
          <p>Gênero: Masculino</p>
          <Button 
            onClick={handleEditClick} // Adicionando o evento de clique
            placeholder={'Editar'}
            className={'btn_editar'}
          />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
