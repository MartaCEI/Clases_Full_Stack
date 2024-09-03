import { isRouteErrorResponse, Link } from "react-router-dom";
import Layout from "./Layout";


function ErrorPage() {

    const error = useRouteError();
    
        return (
            <Layout>
                <div id="error-page">
                    <h1>Oops!</h1>
                    <p>Tuvimos un problema, página no encontrada</p>
                    <p>
                        <i>{error.statusText} || {error.message}</i>
                    </p>
                    <Link to="/">Volver al inicio</Link>
                </div>
            </Layout>
        );
}

export default ErrorPage;