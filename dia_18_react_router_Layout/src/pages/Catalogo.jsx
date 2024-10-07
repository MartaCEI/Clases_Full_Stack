import ArmaCard from "../components/ArmaCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Catalogo = () => {
    const [productos, setProductos] = useState([]);
    const [filtro, setFiltro] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        try {
            const response = await fetch('/backend/data.json');
            const objeto = await response.json();
            setProductos(objeto.productos);
            setFiltro(objeto.productos);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    }

    const handleClick = (precio) => {
        const filtrados = productos.filter(producto => producto.price > precio);
        setFiltro(filtrados);
    }

    const handleInput = (e) => {
        const nuevaBusqueda = e.target.value;
        setBusqueda(nuevaBusqueda); // Guardar el valor de búsqueda
        const filtrados = productos.filter(producto => 
            producto.title.toLowerCase().includes(nuevaBusqueda.toLowerCase()));
        setFiltro(filtrados); // Filtrar productos por nombre
    };

    return (
        <section className="Catalogo-container">
            <h1 className="Catalogo-h1">Catálogo</h1>
            <div className="Catalogo-container-filter">
                <div className="Catalogo-filter">
                    <p>Productos: {productos.length}</p>
                    <p>Productos Filtrados: {filtro.length}</p>
                    <input
                            type="text"
                            placeholder="Buscar..."
                            value={busqueda} // Mantener el valor en el input
                            onChange={handleInput}
                    />
                </div>
                <div className="Catalogo-filter">
                    <button className="Catalogo-btn-filter" onClick={() => handleClick(0)}>Todos los productos</button>
                    <button className="Catalogo-btn-filter" onClick={() => handleClick(100)}>Más de 100€</button>
                    <button className="Catalogo-btn-filter" onClick={() => handleClick(200)}>Más de 200€</button>
                    <button className="Catalogo-btn-filter" onClick={() => handleClick(300)}>Más de 300€</button>
                </div>
            </div>
            <ul className="Catalogo-ul">
                {
                filtro.map((producto) => (
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