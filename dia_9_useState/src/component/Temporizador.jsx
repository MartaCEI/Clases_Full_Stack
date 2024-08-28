import { useState } from 'react';

const Temporizador = () => {
    const [segundos, setSegundos] = useState(0);

    const iniciarTemporizador = () => {
        const interval = setInterval(() => {
            setSegundos(segundos + 1);
        }, 1000);
        return () => clearInterval(interval);
    }   

    return (
        <div className="Card">
            <h2>Temporizador</h2>
            <p>{segundos}</p>
            <button onClick={ () => iniciarTemporizador() }>Iniciar</button>
            <button onClick={ () => setSegundos(segundos) }>Detener</button>
            <button onClick={ () => setSegundos(0) }>Reiniciar</button>
        </div>
    );
}

export default Temporizador;