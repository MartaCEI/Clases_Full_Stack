# Clase 18 - React Router - Layout

## Pasos
1. npm create vite@latest
   npm i
   npm i react-router-dom

3. Cambio el archivo app.jsx por Layout.jsx y borramos app.css

2. Crear la estructura de carpetas
    - src
        - css
        - components
        - pages
        - lib
            - routes
            - services
            - utils
        

3. Crear el archivo de rutas (src/lib/routes/routes.jsx).
    - import { createBrowserRouter } from 'react-router-dom' y Layout.jsx
    - Crear la constante router con createBrowserRouter:
        ```jsx
        import { createBrowserRouter } from 'react-router-dom';
        import Layout from '../Layout';

        const router = createBrowserRouter ([Array de rutas]);
        ```
    - Crear las rutas que será un array que dentro tiene un objeto con las siguientes propiedades:
        - path: "/"   // Ruta principal
        - element: <Layout /> // Componente que se va a renderizar
        - errorElement: <div>404</div> // Componente que se va a renderizar si no encuentra la ruta. Se puede buscar en internet una página de error 404 y copiar el código html. En este caso sé importa la página de error y se renderiza en el errorElement. Sacada de React-router-dom.
        - children: [] // Array de rutas hijas
        ```jsx
        const router = createBrowserRouter (
            [ 
                {
                    path: '/',
                    element: <Layout />,
                    errorElement: <Error-page />,
                    children: []
                }
            ]
        );
        ```
    - CHILDREN: Crear los children que a su vez será un array con multiples objetos con las siguientes propiedades:
        - path: "/home" // Ruta hija
        - element: <Home /> // Componente que se va a renderizar
        NOTA: Se debe importar el componente hijos. 
        ```jsx
        ....
            children: [
                {
                    path: '/home',
                    element: <Home />,
                }
            ]
        ....
        ```
    - RUTA DINAMICA: Ruta especial el componente/página <Personaje ...> para que al cargar la página se muestre el personaje con el id. 
        ```jsx
        {
            path: '/personaje/:Id',
            element: <Personaje />,
        },
        ```

4. Añadir el Routerprovider en el main.jsx
    - importar el router
    - Añadir el router dentro del StrictMode
```jsx
import './css/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './lib/routes/routes'
import { StrictMode } from 'react'
import reactDOM from 'react-dom'

reactDOM.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
    document.getElementById('root')
)
```

5. Anadir <Oulet /> dentro del <main> del Layout.jsx
    ```jsx
    import { Outlet } from 'react-router-dom';

    const Layout = () => {
        return (
            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        );
    }

    export default Layout;
    ```

6. Creamos el archivo css que vamos a utilizar para el proyecto y lo importamios dentro del Layout.jsx. Así, este css abarcará toda mi página.
    ```jsx
    import '../css/layout.css';
    ```

## Notas (ejemplo porfe): Otra forma de hacer la ruta dinámica
- En el archivo de rutas se puede hacer la ruta dinámica de la siguiente forma:
 - Path: "/"
 - Element: <Layout />"
 - ErrorElement: <ErrorPage />
 - Children: [] => La página principal dentro de children la llamaremos `index:true` Ya que la hemos asociado al path principal.
```jsx
    const router = createBrowserRouter (
        [
            {
                path: '/',
                element: <Layout />,
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    }, 
                    {
                        path: 'catalogo',
                        element: <Catalogo />,
                    },  
                    {
                        path: 'producto/:id',
                        element: <Producto />,
                    }
                ]
            }
        ]
    );

    export default router;
```

7. Crear la variable `id` en el archivo Personaje.jsx para que se pueda acceder a la ruta dinámica.
- Se importa `useParams` de react-router-dom (para leer los parámetros de la URL). 
- Si en las rutas se ha definido `:id` el parametro de useParams será `id`.
    ```jsx
    import { useParams } from 'react-router-dom';

    const Personaje = () => {
        const { id } = useParams();
        return (
            <div>
                <h1>Personaje {id}</h1>
            </div>
        );
    }

    export default Personaje;
    ```

8. Creamos la página de error 404 (ErrorPage.jsx)
- Trata de leer status text, si no lo encuentra, trata de leer el mensaje, si no lo encuentra, muestra "Pagina no encontrada".
    ```jsx
    import { useRouteError } from 'react-router-dom';
    const ErrorPage = () => {

        const error = useRouteError();

        return (
            <div>
                Ooops! tuvimos un error.
                <p>
                    {
                        error?.statusText || error?.message || "Pagina no encontrada"
                    }
            </div>
        );
    }

    export default ErrorPage;
    ```

### Notas: Para este proyecto Catálogo:
Ya que todavia no tenemos una Api ExpressJS del back-end, podemos utilizar un archivo JSON para simular la base de datos dentro de la carpeta public o en lib/utils/datos.json y hacer un fetch a ese archivo JSON.
También se puede descargar fotos en la carpeta public y las podemos llar desde el JSON solo con el nombre de la imagen. La URL para la image seria `http://localhost:3000/img/${imagen}`. Normalmente las imagenes irian en el backend.

Carpetas:
- public
    - backend
        - datos.json
        - img
            - imagen1.jpg
            - imagen2.jpg

9. Creamos el archivo datos.json en la carpeta public. Que nos recogerá los datos de los productos, el estado:ok y la cantidad para poder trabajar con filtrado. 
```json
{   
    "state": "ok",
    "cantidad": 2,
    "productos": [
        {
            "id": 1,
            "nombre": "Producto 1",
            "descripcion": "Descripción del producto 1",
            "precio": 100,
            "imagen": "imagen1.jpg"
        },
        {
            "id": 2,
            "nombre": "Producto 2",
            "descripcion": "Descripción del producto 2",
            "precio": 200,
            "imagen": "imagen2.jpg"
        },
    ]
}
```

## Filtrado de productos según el precio
- Creo un useState para el filtro de productos:
    ```jsx
    const [filtro, setFiltro] = useState('');
    ```
- Creo el fetch para obtener los datos tanto de los productos como de los productos que vamos a filtrar. 
```jsx
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
```
- En el return entonces puedo ya imprimir los productos en total que tiene la página y la cantidad de productos filtrados.
```bash
NOTA: Para hacer el map, se impromiran los productos filtrados. No todos los productos
```
```jsx
    <h2>Catálogo de Productos</h2>
    <p>Productos: {productos.length}</p>
    <p>Productos Filtrados: {filtro.length}</p>
```
- Y crear botones con HandleClick para filtrar los productos según el precio.
```jsx
    <button onClick={() => handleClick(0)}>Todos los productos</button>
    <button onClick={() => handleClick(100)}>Más de 100€</button>
    <button onClick={() => handleClick(200)}>Más de 200€</button>
    <button onClick={() => handleClick(300)}>Más de 300€</button>

    const handleClick = (precio) => {
        const filtrados = productos.filter(producto => producto.price > precio);
        setFiltro(filtrados);
    }
    
    // con un input se puede hacer un filtro por nombre
    const [busqueda, setBusqueda] = useState('');
    <input type="text" placeholder="Filtrar por nombre" onChange={handleInput} value={busqueda} />

    const handleInput = (e) => {
        const busqueda = e.target.value;
        const filtrados = productos.filter(producto => producto.title.toLowerCase().includes(busqueda.toLowerCase()));
        setFiltro(filtrados);
    }
```



