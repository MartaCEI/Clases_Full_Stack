import React, { useState } from 'react';

const EditorTexto = () => {
    const [texto, setTexto] = useState('');
    const [numeroPalabras, setNumeroPalabras] = useState(0);
    const [numeroCaracteres, setNumeroCaracteres] = useState(0);

    const handleOnChange = (e) => {
        e.preventDefault();
        setTexto(e.target.value);
        const palabras = e.target.value.split(' '); // Separar por espacios
        setNumeroPalabras(palabras.length);
        setNumeroCaracteres(e.target.value.length);
    }

    const handleOnClear = () => {
        setTexto('');
        setNumeroPalabras(0);
        setNumeroCaracteres(0);
    }

    return (
        <div className="Card">
            <h2>Editor de texto</h2>
            <textarea
                onChange={handleOnChange}
                value={texto}
                placeholder="Escribe aquí!">
            </textarea>
            <p>{numeroPalabras==1 ? `${numeroPalabras} palabra` : `${numeroPalabras} palabras`}</p>
            <p>{numeroCaracteres==1 ? `${numeroCaracteres} caracter` : `${numeroCaracteres} caracteres`}</p>
            <button onClick={handleOnClear}>Limpiar</button>
        </div>
    );
}

export default EditorTexto;