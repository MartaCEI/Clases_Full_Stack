import { useState } from "react";

const Carrito = () => {
    // Estado para manejar la cantidad total de productos y totales monetarios
    const [individualItems, setIndividualItems] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [total, setTotal] = useState(0);
    
    // Lista de productos disponibles
    const listaProductos = [
        { id: 1, nombre: 'Producto 1', precio: 100 },
        { id: 2, nombre: 'Producto 2', precio: 200 },
        { id: 3, nombre: 'Producto 3', precio: 300 },
        { id: 4, nombre: 'Producto 4', precio: 400 },
        { id: 5, nombre: 'Producto 5', precio: 500 },
    ];

    // Función para manejar el clic en el botón "Agregar"
    const hadleAgregar = (producto) => {
        // Actualizar estado del carrito
        setIndividualItems(prev => {
            const cantidadActual = prev[producto.id] ? prev[producto.id].cantidad + 1 : 1;
            const nuevoItems = { ...prev, [producto.id]: { ...producto, cantidad: cantidadActual } };
            
            // Calcular nuevos totales
            let nuevoTotalItems = 0;
            let nuevoTotalDinero = 0;

            for (const key in nuevoItems) {
                const item = nuevoItems[key];
                nuevoTotalItems += item.cantidad;
                nuevoTotalDinero += item.precio * item.cantidad;
            }

            // Actualizar los estados
            setTotalItems(nuevoTotalItems);
            setTotal(nuevoTotalDinero);

            return nuevoItems;
        });
    };

    const manejarQuitar = (productoId) => {
        setIndividualItems(prev => {
            const producto = prev[productoId];
            if (!producto) return prev; // Si el producto no existe, no hacer nada

            const nuevaCantidad = producto.cantidad - 1;
            if (nuevaCantidad <= 0) {
                // Eliminar producto si la cantidad es 0 o menos
                const { [productoId]: _, ...resto } = prev;
                return resto;
            } else {
                // Actualizar cantidad
                const nuevoItems = { ...prev, [productoId]: { ...producto, cantidad: nuevaCantidad } };

                // Calcular nuevos totales
                let nuevoTotalItems = 0;
                let nuevoTotalDinero = 0;

                for (const key in nuevoItems) {
                    const item = nuevoItems[key];
                    nuevoTotalItems += item.cantidad;
                    nuevoTotalDinero += item.precio * item.cantidad;
                }

                // Actualizar los estados
                setTotalItems(nuevoTotalItems);
                setTotal(nuevoTotalDinero);

                return nuevoItems;
            }
        });
    };

    // Función para limpiar el carrito
    const handleLimpiar = () => {
        setIndividualItems({});
        setTotalItems(0);
        setTotal(0);
    };

    // Convertir el estado de `individualItems` en un arreglo para renderizar
    const carrito = Object.values(individualItems);

    return (
        <div className="Card">
            <h2>Carrito de compras</h2>
            <div className="Grid">
                <div>
                    <ul>
                        {listaProductos.map((producto) => (
                            <li key={producto.id}>
                                {producto.nombre} - ${producto.precio}
                                <button onClick={() => hadleAgregar(producto)}>Agregar</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total Items: {totalItems}</h3>
                    <h3>Total: ${total}</h3>
                </div>
                <div>
                    <ul>
                        {carrito.map((producto) => (
                            <li key={producto.id}>
                                {producto.nombre} - ${producto.precio} x {producto.cantidad} = ${producto.precio * producto.cantidad}
                                <button onClick={() => manejarQuitar(producto.id)}>Quitar</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleLimpiar}>Limpiar carrito</button>
                </div>
            </div>
        </div>
    );
};

export default Carrito;