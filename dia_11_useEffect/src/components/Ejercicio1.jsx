// Crea un componente que registre el tiempo en segundos desde que se montó. 
import React, { useEffect, useState } from 'react';

export const Ejercicio1 = () => {
    const [segundos, setSegundos] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        // Crea un intervalo que incremente los segundos. 
        // setInterval recibe una función y un tiempo en milisegundos. Es decir, incrementa los segundos cada 1000 milisegundos = 1 segundo.
        // setInterval(() => { }, 1000); (Función , tiempo en milisegundos)
        const interval = setInterval(() => {
            // Guarda el intervalo en el State
            setSegundos(time => time + 1); 
        }, 1000);
        setIntervalId(interval); // Save the interval ID
        // console.log('Intervalo creado');
        
        
        return () => {
            clearInterval(interval);
            console.log('Intervalo eliminado');
        };
    }, []);

    useEffect(() => {
        document.title = `Segundos: ${segundos}`;
    }, [segundos]);

    const detenerIntervalo = () => {
        if (intervalId) {
            clearInterval(intervalId);
            console.log('Intervalo detenido');
        }
    };

    const stratTimer = () => {
        clearInterval(intervalId);
        setSegundos(0);
        const Int = setInterval(()=>{
            setSegundos(segundos => segundos+1)
        }, 1000)
        console.log('Cargué el timer', Int)
        setIntervalId(Int);  // Guardo el intervalo en useState
    }

    const resetTimer = () => {
        clearInterval(intervalId);
        setSegundos(0);
        console.log('Reset timer')
    }

    return (
        <div className="Card">
            <h2>Timmer</h2>
            <p>Segundos: {segundos}</p>
            <button onClick={stratTimer}>Start</button>
            <button onClick={resetTimer}>Reset</button>
            <button onClick={detenerIntervalo}>Detener</button>
        </div>
    );
}