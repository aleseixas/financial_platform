import React, {useState} from 'react'
import '../styles/resultados.css'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { getFeature } from './HomePage'

const feature = getFeature()

export const Descricoes = () => {
    const navigate = useNavigate();
    const [activeText, setActiveText] = useState('');

    const textos = [
        "<b>Leituras:</b> Aqui, você encontra textos didáticos relacionados ao mundo das finanças, organizados por assuntos e dificuldade. Para acessá-los, basta selecionar o assunto no qual você está interessado ou, alternativamente, a dificuldade que considera ser a mais apropriada para você!",
        "<b>Notícias:</b> Aqui, você encontra as últimas notícias sobre o uniserso das finanças, organizadas por assunto. Assim, ao selecionar um assunto, você visualizará apenas notícias relacionadas a este tema. Além disso, é possível favoritar uma notícia ao interagir com o ícone que aparece no canto infeirior direito de cada notícia. Ao selecioná-lo, você deixa a notícia em questão salva e pode acessá-la diretamente clicando em Mostrar Notícias Salvas.",
        "<b>Cursos:</b> Aqui, você pode visualizar cursos divulgados pela página. Você encontrará uma breve descrição do curso e, caso se interesse por ele, poderá clicar Leia Mais, o que te direcionará para a íntegra do curso em questão.",
        "<b>Quiz:</b> Aqui, você responderá a 5 perguntas rápidas sobre a forma como você enxerga o mundo dos investimentos. Com base em suas respostas, forneceremos uma sugestão de qual perfil de investidor você mais se encaixa (Conservador, Moderado ou Arrojado). Porém, caso você não concorde com o resultado, você pode alterá-lo livremente em Perfil. Dentro da plataforma, a utilidade de entender em qual perfil você se encaixa pode servir como um bom direcionamento para um melhor aproveitamento de suas funcionalidades."
    ]

    const handleButtonClick = (event) => {
        const value = event.target.innerText;
        setActiveText(value);
        if (value === "Voltar") navigate('/home')
        else if (value === "Continuar") {
            if (feature == 0) navigate('/leitura')
            else if (feature == 1) navigate('/Noticias')
            else if (feature == 2) navigate('/Cursos')
            else if (feature == 3) navigate('/quiz')
            else if (feature == 4) navigate('/quantbot')
        }
    };

    return (
        <>
        <Navbar/>
        <div className="center-wrapper">
            <div className="container-resultados">
                {/* Usando dangerouslySetInnerHTML para interpretar o HTML */}
                <p style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: textos[feature] }} />
                <button className="option-b" onClick={handleButtonClick}>Voltar</button>
                <button className="option-b" onClick={handleButtonClick}>Continuar</button>
             </div>
        </div>
        </>
    )
}

export default Descricoes
