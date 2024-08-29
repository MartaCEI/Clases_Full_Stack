import { useState } from 'react';

const Temporizador = () => {
    const [segundos, setSegundos] = useState(0)
    const [idIntervalo, setIdIntervalo] = useState(null)

    const stratTimer = () => {
        resetTimer();
        const Int = setInterval(()=>{
            setSegundos(segundos => segundos+1)
        }, 1000)
        console.log('Cargué el timer', Int)

        setIdIntervalo(Int);  // Guardo el intervalo en useState
    }

    const pauseTimer = () => {
        console.log('Pause timer')
        clearInterval(idIntervalo);
    }

    const resetTimer = () => {
        console.log('Reset timer')
        setSegundos(0)
        clearInterval(idIntervalo);
    }

    return ( 
        <div>
            <h2>Timer</h2>
            <p>Han pasado {segundos} segundos</p>
            <button onClick={stratTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}

export default Temporizador;