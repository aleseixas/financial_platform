import React, { useState } from 'react';
import '../styles/leitura.css';
import Navbar from '../components/Navbar';

// Just the base file for the Leitura page. 
// Future functionalities will include:
// - A button to change the text to a different one
// - A progress bar to show how much of the text has been read
// - A button to go back to the previous page
// - A conclusion page. 


const Leitura = () => {
  
  const noticias = [
    {
      titulo: "Notícia 1",
      autor: "Autor 1",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Aenean feugiat non eros quis feugiat. Quisque euismod est sit amet quam pharetra, sit amet feugiat ex fringilla. Nulla facilisi. Integer tincidunt, nisi vitae convallis pulvinar, risus sapien facilisis turpis, nec vehicula risus ligula a elit. Integer a odio augue. Nullam cursus sagittis orci, sit amet scelerisque sem fermentum et. Suspendisse potenti. Donec eget bibendum felis. Vestibulum et auctor ex. Maecenas auctor fringilla velit, ac viverra est facilisis sit amet. Nam scelerisque lacus nec magna luctus, eu egestas massa faucibus. Integer non nisi eget nulla placerat pulvinar in vel ligula. Duis vitae nunc non mauris venenatis sollicitudin. Phasellus at quam et nulla malesuada viverra at at elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ac nibh at erat aliquet ultrices. Praesent consequat libero at urna efficitur, non tincidunt lectus luctus. Nam aliquet volutpat tortor, id vulputate mi fringilla ut. Vestibulum feugiat orci in neque sollicitudin maximus. Integer eget bibendum ex, eget aliquet purus. Sed ultricies dapibus elit vel feugiat. Nullam non lectus ac erat dictum convallis at sed libero. Suspendisse ac vestibulum augue, eu porta erat. Sed tempor risus at felis commodo, at lacinia nulla viverra. In hac habitasse platea dictumst. Etiam at urna ac arcu imperdiet dapibus id eget nisl. Donec tempor condimentum nisl, in pretium justo. Curabitur nec lacus eget nulla elementum tincidunt ac non eros. Ut sollicitudin venenatis magna nec ultricesLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Aenean feugiat non eros quis feugiat. Quisque euismod est sit amet quam pharetra, sit amet feugiat ex fringilla. Nulla facilisi. Integer tincidunt, nisi vitae convallis pulvinar, risus sapien facilisis turpis, nec vehicula risus ligula a elit. Integer a odio augue. Nullam cursus sagittis orci, sit amet scelerisque sem fermentum et. Suspendisse potenti. Donec eget bibendum felis. Vestibulum et auctor ex. Maecenas auctor fringilla velit, ac viverra est facilisis sit amet. Nam scelerisque lacus nec magna luctus, eu egestas massa faucibus. Integer non nisi eget nulla placerat pulvinar in vel ligula. Duis vitae nunc non mauris venenatis sollicitudin. Phasellus at quam et nulla malesuada viverra at at elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ac nibh at erat aliquet ultrices. Praesent consequat libero at urna efficitur, non tincidunt lectus luctus. Nam aliquet volutpat tortor, id vulputate mi fringilla ut. Vestibulum feugiat orci in neque sollicitudin maximus. Integer eget bibendum ex, eget aliquet purus. Sed ultricies dapibus elit vel feugiat. Nullam non lectus ac erat dictum convallis at sed libero. Suspendisse ac vestibulum augue, eu porta erat. Sed tempor risus at felis commodo, at lacinia nulla viverra. In hac habitasse platea dictumst. Etiam at urna ac arcu imperdiet dapibus id eget nisl. Donec tempor condimentum nisl, in pretium justo. Curabitur nec lacus eget nulla elementum tincidunt ac non eros. Ut sollicitudin venenatis magna nec ultrices."
    },
    {
      titulo: "Notícia 2",
      autor: "Autor 2",
      texto: "Texto da notícia 2. Vivamus euismod mauris quis nisl feugiat efficitur."
    },
    {
      titulo: "Notícia 3",
      autor: "Autor 3",
      texto: "Texto da notícia 3. Morbi sodales magna ac mi faucibus, at facilisis libero venenatis."
    },
   
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaNoticia = () => {
    if (indiceAtual < noticias.length - 1) {
      setIndiceAtual(indiceAtual + 1);
    }
  };

  const noticiaAnterior = () => {
    if (indiceAtual > 0) {
      setIndiceAtual(indiceAtual - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="leitura-container">
        <h1>{noticias[indiceAtual].titulo}</h1>
        <h3>Por {noticias[indiceAtual].autor}</h3>
        <div className="text-container">
          <p>{noticias[indiceAtual].texto}</p>
        </div>
        
        <div className="navigation-buttons">
          <button onClick={noticiaAnterior} disabled={indiceAtual === 0}>
            Anterior
          </button>
          
      
          <button onClick={proximaNoticia} disabled={indiceAtual === noticias.length - 1}>
            Próxima
          </button>
        </div>
      </div>
    </>
  );
};

export default Leitura;
