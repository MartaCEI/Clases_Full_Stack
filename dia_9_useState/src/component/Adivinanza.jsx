import { useState } from "react";

const Adivinanza = () => {
    const [valor, setValor] = useState("");
    const [respuesta, setRespuesta] = useState("");
    const [error, setError] = useState("");
    // Math.floor significa que lo redondea a la baja. 
    // Math.random() genera un número aleatorio entre 0 y 1. Multiplicamos por 100 para que sea entre 0 y 100.
    const [numero, setNumero] = useState(() => Math.floor(Math.random() * 100));


    const validarError = () => {
        // NOTA: Number(valor) convierte el valor a número. Si no se puede convertir, devuelve NaN.
        const numeroIngresado = Number(valor);
        if (numeroIngresado < 0 || numeroIngresado > 100) {
            setError("El número debe estar entre 0 y 100");
            return true;
        } else if (valor === "") {
            setError("Debes ingresar un número");
            return true;
        } else {
            setError("");
            return false;
        }
    }

    const handleRespuesta = () => {
        if (validarError()) return;

        const numeroIngresado = Number(valor);
        if (numeroIngresado === numero) {
            setRespuesta("¡Correcto!");
        } else if (numeroIngresado > numero) {
            setRespuesta("¡Más bajo!");
        } else {
            setRespuesta("¡Más alto!");
        }
    }

    return (
        <div className="Card">
            <h2>Adivinanza</h2>
            <input 
                type="number" 
                onChange = {(e) => {setValor(e.target.value)}}
                value={valor}
            />
            <button onClick={handleRespuesta}>Adivinar</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {respuesta && <p>{respuesta}</p>}
        </div>
    );
}

export default Adivinanza;