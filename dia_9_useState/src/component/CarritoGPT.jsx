import { useState } from "react";

const Carrito = () => {
    const [carrito, setCarrito] = useState([]);

    const listaProductos = [
        { id: 1, nombre: 'Producto 1', precio: 100 },
        { id: 2, nombre: 'Producto 2', precio: 200 },
        { id: 3, nombre: 'Producto 3', precio: 300 },
        { id: 4, nombre: 'Producto 4', precio: 400 },
        { id: 5, nombre: 'Producto 5', precio: 500 },
    ];

    const handleAddProduct = (producto) => {
        setCarrito(prevCarrito => {
            const index = prevCarrito.findIndex(item => item.id === producto.id);
            if (index >= 0) {
                // Producto ya existe, incrementar cantidad
                const newCarrito = [...prevCarrito];
                newCarrito[index].cantidad += 1;
                return newCarrito;
            } else {
                // Producto no existe, agregarlo con cantidad 1
                return [...prevCarrito, { ...producto, cantidad: 1 }];
            }
        });
    };

    const handleRemoveProduct = (producto) => {
        setCarrito(prevCarrito => {
            const index = prevCarrito.findIndex(item => item.id === producto.id);
            if (index >= 0) {
                const newCarrito = [...prevCarrito];
                if (newCarrito[index].cantidad > 1) {
                    // Si la cantidad es mayor a 1, decrementar la cantidad
                    newCarrito[index].cantidad -= 1;
                } else {
                    // Si la cantidad es 1, eliminar el producto del carrito
                    newCarrito.splice(index, 1);
                }
                return newCarrito;
            }
            return prevCarrito;
        });
    };


    let totalItems = 0;
    let total = 0;

    carrito.forEach(item => {
        totalItems += item.cantidad;
        total += item.precio * item.cantidad;
    });

    return (
        <div className="Card">
            <h2>Carrito de compras GPT</h2>
            <div className="Grid">
                <div>
                    <ul>
                        {listaProductos.map((producto) => (
                            <li key={producto.id}>
                                {producto.nombre} - ${producto.precio}
                                <button onClick={() => handleAddProduct(producto)}>Agregar</button>
                                <button onClick={() => handleRemoveProduct(producto)} disabled={carrito.find(item => item.id === producto.id)?.cantidad === 0}>Quitar</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Detalles del carrito:</h3>
                    <ul>
                        {carrito.map((producto) => (
                            <li key={producto.id}>
                                {producto.nombre} - ${producto.precio} x {producto.cantidad} = ${producto.precio * producto.cantidad}
                            </li>
                        ))}
                    </ul>
                    <h3>Total Items: {totalItems}</h3>
                    <h3>Total: ${total}</h3>
                    <button onClick={() => setCarrito([])}>Limpiar carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Carrito;