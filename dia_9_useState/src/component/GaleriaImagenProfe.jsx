import { useState } from "react";

const GaleriaImagenProfe = () => {
    const [index, setIndex] = useState(0);
    
    const imageList = [
        { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
        { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
        { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
    ];

    const handleSiguiente = () => {
        // Incrementar el index
        if (index < imageList.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    const handleAnterior = () => {
        // Decrementar el index
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(imageList.length - 1);
        }
    }

    return (
        <div className="Card">
            <div>
                <h2>Galeria de Imagenes Profe (con index)</h2>
                <img src={imageList[index].src} alt={imageList[index].alt} />
            </div>
            <button onClick={handleAnterior}>Anterior</button>
            <button onClick={handleSiguiente}>Siguiente</button>
        </div>
    );
}

export default GaleriaImagenProfe;