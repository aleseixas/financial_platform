import React, { useState, useEffect } from 'react';
import '../styles/profilepage.css';
import Navbar from '../components/Navbar';  
import Button from '../components/Button';

const ProfilePage = () => {
  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [tipoInvestidor, setTipoInvestidor] = useState('');

  // Função para alternar entre modo de edição e modo de visualização
  const handleEditClick = () => {
    if(editando){
      try {
        fetch('http://localhost:8000/api/updateprofile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome,
            email,
            dataNascimento,
            genero,
            tipoInvestidor,
          }),
        });
      }
      catch (error) {
        console.error('Error updating profile data:', error);
      }
    }
    setEditando((prevEditando) => !prevEditando); // Alterna entre true e false
  };

  // Função para lidar com mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'nome':
        setNome(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'dataNascimento':
        setDataNascimento(value);
        break;
      case 'genero':
        setGenero(value);
        break;
      case 'tipoInvestidor':
        setTipoInvestidor(value);
        break;
      default:
        break;
    }
  };

  // Fetch profile data from backend when component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/getprofile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setNome(data.nome);
        setEmail(data.email);
        setDataNascimento(data.dataNascimento);
        setGenero(data.genero);
        setTipoInvestidor(data.tipoInvestidor);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <h2>Meu Perfil</h2>

          {editando ? (
            <>
              <p>
                Nome: <input type="text" name="nome" value={nome} onChange={handleChange} />
              </p>
              <p>
                Email: <input type="email" name="email" value={email} onChange={handleChange} />
              </p>
              <p>
                Data de Nascimento: <input type="text" name="dataNascimento" value={dataNascimento} onChange={handleChange} />
              </p>
              <p>
                Gênero: 
                <select name="genero" value={genero} onChange={handleChange}>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </select>
              </p>
              <p>
                Tipo Investidor: 
                <select name="tipoInvestidor" value={tipoInvestidor} onChange={handleChange}>
                  <option value="Conservador">Conservador</option>
                  <option value="Moderado">Moderado</option>
                  <option value="Agressivo">Agressivo</option>
                </select>
              </p>
            </>
          ) : (
            <>
              <p>Nome: {nome}</p>
              <p>Email: {email}</p>
              <p>Data de Nascimento: {dataNascimento}</p>
              <p>Gênero: {genero}</p>
              <p>Tipo Investidor: {tipoInvestidor}</p>
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
