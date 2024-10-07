import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Arma from "../components/Arma";

const Producto = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        fetchProducto();
    }, []);

    const fetchProducto = async () => {
        try {
            const response = await fetch('/backend/data.json');
            const objeto = await response.json();
            const productoEncontrado = objeto.armas.find(arma => arma.id === parseInt(id)); // Convertir id a número
            if (productoEncontrado) {
                setProducto(productoEncontrado);
            } else {
                console.error("Producto no encontrado");
            }
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    }

    return (
        <section className="Producto-container">
            {
            producto && producto.id ? (
                <Arma {...producto} />
            ) : (
                <p>Producto no encontrado</p>
            )
            }
        </section>
    );
}

export default Producto;