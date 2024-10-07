import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    
        return (
                <div>
                    <h1>Oops!</h1>
                    <p>Tuvimos un problema.</p>
                    <p>
                        <i>{error?.statusText || error?.message || "Página no encontrada"} </i>
                    </p>
                    <Link to="/">Volver al inicio</Link>
                </div>
        );
}

export default ErrorPage;