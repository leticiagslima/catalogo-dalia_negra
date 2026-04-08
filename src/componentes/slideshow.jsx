import { useState, useEffect } from 'react';
import img1 from '../img/LR-colecao.jpg';
import img2 from '../img/hp-colecao.webp';
import img3 from '../img/ving-colecao.webp';

function Slideshow() {

    const imagens = [img1, img2, img3];
    const [indiceAtual, setIndiceAtual] = useState(0);

    const proximoSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
    };

    const voltarSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
    };

      useEffect(() => {
            const interval = setInterval(proximoSlide, 5000);

            return () => clearInterval(interval);
        }, []);

    return(

      <div className="slideshow">
        <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} className="banner"/>
      </div>

    );
}

export default Slideshow;