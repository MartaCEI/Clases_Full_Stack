// Crea un componente que obtenga datos de una API y los muestre en pantalla.
// http://jsonplaceholder.typicode.com/posts/1
import React, { useEffect, useState } from 'react';

export const Ejercicio2 = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const objeto = await response.json();
                setData(objeto.slice(0, 3)); // Limit to 3 items
            } catch (error) {
            console.log("Error: ", error);
            }
        };
        fetchData();

    }, []);

    return (
        <div className="Card">
            <h2>Fetch</h2>
            {
                data.map((item) => {
                    return (
                        <User key={item.id} {...item} />
                    );
                })
            }
        </div>
    );
}

const User = ({ userId,title, body }) => {
    return (
        <div>
            <h2>Title: {title}</h2>
            <h3>UserId: {userId}</h3>
            <p>Body: {body}</p>
        </div>
    );
}