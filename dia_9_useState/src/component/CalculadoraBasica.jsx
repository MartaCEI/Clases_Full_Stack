import React, { useState } from 'react';

const CalculadoraBasica = () => {
    const [display, setDisplay] = useState('0');
    const [operando1, setOperando1] = useState(0);
    const [operando2, setOperando2] = useState(0);
    const [operador, setOperador] = useState('');
    const [resultado, setResultado] = useState(0);

    const handleNumero = (numero) => {
        if (display === '0') {
            setDisplay(numero);
        } else {
            setDisplay(display + numero);
        }
    }

    const handleOperador = (operador) => {
        setOperando1(Number(display));
        setOperador(operador);
        setDisplay('0');
    }

    const handleIgual = () => {
        const operando2Actual = Number(display);
        let resultadoActual = 0;
    
        switch (operador) {
            case '+':
                resultadoActual = operando1 + operando2Actual;
                break;
            case '-':
                resultadoActual = operando1 - operando2Actual;
                break;
            case '*':
                resultadoActual = operando1 * operando2Actual;
                break;
            case '/':
                resultadoActual = operando1 / operando2Actual;
                break;
            default:
                break;
        }
    
        setResultado(resultadoActual);
        setDisplay(String(resultadoActual));
    }

    const handleLimpiar = () => {
        setDisplay('0');
        setOperando1(0);
        setOperando2(0);
        setOperador('');
        setResultado(0);
    }

    return (
        <div className="Card">
            <h2>Calculadora Básica</h2>
            <p>{display}</p>
            <div>
            <button onClick={() => handleNumero('7')}>7</button>
            <button onClick={() => handleNumero('8')}>8</button>
            <button onClick={() => handleNumero('9')}>9</button>
            <button onClick={() => handleOperador('/')}>/</button>
            </div>
            <div>
            <button onClick={() => handleNumero('4')}>4</button>
            <button onClick={() => handleNumero('5')}>5</button>
            <button onClick={() => handleNumero('6')}>6</button>
            <button onClick={() => handleOperador('*')}>*</button>
            </div>
            <div>
            <button onClick={() => handleNumero('1')}>1</button>
            <button onClick={() => handleNumero('2')}>2</button>
            <button onClick={() => handleNumero('3')}>3</button>
            <button onClick={() => handleOperador('-')}>-</button>
            </div>
            <div>
            <button onClick={() => handleNumero('0')}>0</button>
            <button onClick={() => handleIgual()}>=</button>
            <button onClick={() => handleLimpiar()}>C</button>
            <button onClick={() => handleOperador('+')}>+</button>
            </div>
        </div>
    );
}

export default CalculadoraBasica;