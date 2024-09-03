import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../Layout';
import Personajes from '../../pages/Personajes';
import Personaje from '../../components/Personaje';
import Episodes from '../../pages/Episodes';
import Locations from '../../pages/Locations';
import ErrorPage from '../../error-page';

const router = createBrowserRouter (
    [
        {
            path: '/',
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <Personajes />,
                }, 
                {
                    path: '/personaje/:Id',
                    element: <Personaje />,
                },  
                {
                    path: '/episodios',
                    element: <Episodes />,
                },  
                {
                    path: '/lugares',
                    element: <Locations />,
                }
            ]
        }
    ]
);

export default router;


