// Crea un componente que registre el tamaño de la ventana cada vez que cambie. 
// EventListener del objeto window.
import React, { useEffect, useState } from 'react';

export const Ejercicio4 = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="Card">
            <h2>Tamaño ventana</h2>
            <p>Width: {windowWidth}</p>
            <p>Height: {windowHeight}</p>
        </div>
    );
};