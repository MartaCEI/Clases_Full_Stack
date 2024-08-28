import { useState, useEffect } from "react";

const SegundoUseEffect = () => {
    const [cont, setCont] = useState(0);
    const boton = document.getElementById('miboton');
    useEffect(() => {

        
        boton.addEventListener('click', () => {
            console.log('Me hicieron Click');
        });

        return () => {
            boton.removeEventListener('click', () => {
                console.log('Me fuí');
            });
        }

    }, [cont]);

    return (
        <>
            <h2>Soy un test de useEffect</h2>
            <button id="miboton" onClick={() => setCont(cont+2)}>Click {cont}</button>
        </>
    );
}

export default SegundoUseEffect;;