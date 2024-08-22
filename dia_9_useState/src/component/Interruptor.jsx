import { useState } from "react";

const Interruptor = () => {
    const [isActive, setIsActive] = useState(true)

    return (
        <div className="Card" >  
            <h2>Interruptor</h2>
            {/* Versión corta con !isActive: Cambia de true a false y viceversa automaticamente. */}
            <button onClick={ () => setIsActive(!isActive) } className={isActive?"claro":"oscuro"}>
                Interruptor {isActive?"encendido":"apagado"}
            </button>
            {/* Version larga */}
            {/* <button onClick={ () => isActive ? setIsActive(false) : setIsActive(true) } className={isActive?"claro":"oscuro"}>
                Interruptor {isActive?"encendido":"apagado"}
            </button> */}
        </div>
    );
}

export default Interruptor;