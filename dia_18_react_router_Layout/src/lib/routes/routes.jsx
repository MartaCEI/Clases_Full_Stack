import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../Layout';
import Catalogo from '../../pages/Catalogo';
import Producto from '../../pages/Producto';
import ErrorPage from '../../Errorpage';
import Carrito from '../../pages/Carrito';

const router = createBrowserRouter (
    [
        {
            path: '/',
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Catalogo />,
                }, 
                {
                    path: 'producto/:id',
                    element: <Producto />,
                },
                {
                    path: 'carrito',
                    element: <Carrito />,
                }
                // {
                //     path: 'chechout',
                //     element: <Checkout />,
                // }
            ]
        }
    ]
);

export default router;


