import { useState } from 'react';

const GaleriaImagenes = () => {
    const [page, setPage] = useState(1);

    const imageList = [
        { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
        { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
        { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
    ];

    const handleSiguiente = () => {
        setPage(page => Math.min(page + 1, 3));
    }

    const handleAnterior = () => {
        setPage(page => Math.max(page - 1, 1));
    }

    const renderizarImagen = () => {
        switch (page) {
            case 1:
                return <Page1 src={imageList[0].src} alt={imageList[0].alt} />
            case 2:
                return <Page2 src={imageList[1].src} alt={imageList[1].alt} />
            case 3:
                return <Page3 src={imageList[2].src} alt={imageList[2].alt} />
            default:
                return null;
        }
    }

    return (
        <div className="Card">
            <h2>Galería de Imágenes (con páginas)</h2>
            <div>
                {renderizarImagen()}
            </div>
            <button onClick={handleAnterior}>Anterior</button>
            <button onClick={handleSiguiente}>Siguiente</button>
        </div>
    );
}

export default GaleriaImagenes;

const Page1 = ({src, alt}) => {
    return (
        <img src={src} alt={alt} />
    );
}

const Page2 = ({src, alt}) => {
    return (
        <img src={src} alt={alt} />
    );
}

const Page3 = ({src, alt}) => {
    return (
        <img src={src} alt={alt} />
    );
}
