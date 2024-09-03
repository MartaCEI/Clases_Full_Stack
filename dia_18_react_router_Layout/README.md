# Clase 18 - React Router - Layout

## Pasos
1. npm create vite@latest
   npm i
   npm i react-router-dom

3. Cambio el archivo app.jsx por Layout.jsx

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

        const router = createBrowserRouter ();
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
                    errorElement: <div>404</div>,
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
    - RUTA DINAMICA: Ruta especial el componente <Personaje ...> para que al cargar la página se muestre el personaje con el id. 
        ```jsx
        {
            path: '/personaje/:Id',
            element: <Personaje />,
        },
        ```

4. Anadir <Oulet /> dentro del main del Layout.jsx
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
