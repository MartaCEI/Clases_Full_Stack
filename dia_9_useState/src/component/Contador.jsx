import { useState } from "react";

const Contador = () => {
    // hook useState
    const [cont, setCont] = useState(0)
    // function handleOnClick. Esta función se encarga de incrementar el valor de cont
    const handleOnClick = () => {setCont(cont + 1)}

    return (
        <div className="Card">  
            <h2>Contador</h2>
            <p>Has hecho click {cont} {cont==1?"vez":"veces"}</p>
            <button onClick={ handleOnClick }>{cont} {cont==1?"Click":"Clicks"}</button>
        </div>
    );
}

export default Contador;