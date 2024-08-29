// Crea un componente que se sincronice con el localStorage del navegador.
import React, { useEffect, useState } from 'react';

export const Ejercicio5 = () => {
    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [age, setAge] = useState(localStorage.getItem('age') || '');

    useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
    }, [name, age]);

    return (
        <div className="Card">
            <h2>Local Storage</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
            />
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}