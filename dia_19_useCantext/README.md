La ejemplo de como usar un useCantext está en el proyecto catálogo de la carpeta dia_18_react_router_dom.




# Uso de `useContext` en React

El hook `useContext` en React se utiliza para consumir un contexto en un componente funcional. Aquí tienes un ejemplo básico de cómo usarlo:

## Paso 1: Crear un Contexto

Primero, crea un contexto utilizando `React.createContext`.

```javascript
import React, { createContext, useContext, useState } from 'react';

const MiContexto = createContext();
```

## Paso 2: Proveer el Contexto

Envuelve los componentes que necesitan acceder al contexto con el proveedor del contexto (`MiContexto.Provider`).

```javascript
const ProveedorDeContexto = ({ children }) => {
    const [valor, setValor] = useState('Hola, Mundo!');

    return (
        <MiContexto.Provider value={{ valor, setValor }}>
            {children}
        </MiContexto.Provider>
    );
};
```

## Paso 3: Consumir el Contexto

Utiliza el hook `useContext` para acceder al valor del contexto en un componente funcional.

```javascript
const ComponenteConsumidor = () => {
    const { valor, setValor } = useContext(MiContexto);

    return (
        <div>
            <p>{valor}</p>
            <button onClick={() => setValor('Nuevo Valor')}>Cambiar Valor</button>
        </div>
    );
};
```

## Paso 4: Usar el Proveedor en la Aplicación

Finalmente, usa el proveedor en tu aplicación para envolver los componentes que necesitan acceso al contexto.

```javascript
const App = () => {
    return (
        <ProveedorDeContexto>
            <ComponenteConsumidor />
        </ProveedorDeContexto>
    );
};

export default App;
```

Con estos pasos, has creado y consumido un contexto utilizando el hook `useContext` en React.

## Ejemplo: Carrito de Compras con `useContext`

A continuación, se muestra un ejemplo de cómo implementar un carrito de compras utilizando `useContext` en React.

### Paso 1: Crear el Contexto del Carrito

Primero, crea un contexto para el carrito de compras.

```javascript
const CarritoContexto = createContext();
```

### Paso 2: Proveer el Contexto del Carrito

Crea un proveedor de contexto que maneje el estado del carrito.

```javascript
const ProveedorDeCarrito = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const eliminarDelCarrito = (idProducto) => {
        setCarrito(carrito.filter(producto => producto.id !== idProducto));
    };

    return (
        <CarritoContexto.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
            {children}
        </CarritoContexto.Provider>
    );
};
```

### Paso 3: Consumir el Contexto del Carrito

Utiliza el hook `useContext` para acceder y manipular el carrito en un componente funcional.

```javascript
const ComponenteCarrito = () => {
    const { carrito, agregarAlCarrito, eliminarDelCarrito } = useContext(CarritoContexto);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {carrito.map(producto => (
                    <li key={producto.id}>
                        {producto.nombre} - ${producto.precio}
                        <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => agregarAlCarrito({ id: 1, nombre: 'Producto Ejemplo', precio: 100 })}>
                Agregar Producto Ejemplo
            </button>
        </div>
    );
};
```

### Paso 4: Usar el Proveedor en la Aplicación

Finalmente, usa el proveedor en tu aplicación para envolver los componentes que necesitan acceso al contexto del carrito.

```javascript
const App = () => {
    return (
        <ProveedorDeCarrito>
            <ComponenteCarrito />
        </ProveedorDeCarrito>
    );
};

export default App;
```

Con estos pasos, has creado un carrito de compras utilizando el hook `useContext` en React.