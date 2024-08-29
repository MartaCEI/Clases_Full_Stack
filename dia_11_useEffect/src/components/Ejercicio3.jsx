// Crea un componente contador con botones para incrementar o decrementar el valor. 
// Usa UseEffect para registrar cada vez que cambia el valor del contador.
import React, { useEffect, useState } from 'react';

export const Ejercicio3 = () => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("Contador: ", contador);
    }, [contador]);

    return (
        <div className="Card">
            <h2>Contador</h2>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </div>
    );
}