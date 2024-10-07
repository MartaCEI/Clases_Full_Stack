import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../Layout';
import Catalogo from '../../pages/Catalogo';
import Producto from '../../pages/Producto';
import ErrorPage from '../../Errorpage';

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
                }
            ]
        }
    ]
);

export default router;


