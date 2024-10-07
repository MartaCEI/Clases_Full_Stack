import ArmaCard from "../components/ArmaCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Catalogo = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        const response = await fetch('/backend/data.json');
        const objeto = await response.json();
        setProductos(objeto.armas);
    }

    return (
        <section className="Catalogo-container">
            <h1 className="Catalogo-h1">Catálogo</h1>
            <ul className="Catalogo-ul">
                {
                productos.map((producto) => (
                    <li className="Catalogo-li" key={producto.id}>
                        <Link className="Catalogo-a" to={`/producto/${producto.id}`}>
                            <ArmaCard {...producto} />
                        </Link>
                    </li>
                ))
                }
            </ul>
        </section>
    );
};


export default Catalogo; 