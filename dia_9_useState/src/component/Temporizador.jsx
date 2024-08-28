import { useState } from 'react';

const Temporizador = () => {
    const [segundos, setSegundos] = useState(0);


    return (
        <div className="Card">
            <h2>Temporizador</h2>
            <p>{segundos}</p>
            <button onClick={() => setSegundos(segundos + 1)}>Iniciar</button>
            <button onClick={() => setSegundos(segundos)}>Detener</button>
            <button onClick={() => setSegundos(0)}>Reiniciar</button>
        </div>
    );
}

export default Temporizador;