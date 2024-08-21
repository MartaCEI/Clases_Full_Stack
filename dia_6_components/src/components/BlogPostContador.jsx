import { getRelativeTime } from "../libs";

const BlogPostContador = ({titulo, autor, fecha, children}) => {

    // Formatear Fechas https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    const miFecha = new Date(fecha);
    console.log(miFecha);

    const fechaFormateada = miFecha.toLocaleDateString('es-ES', {
            weekday: 'short',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
            });

            // Relateve time (hace cuanto tiempo fue que pasó)
    const fechaPasada = getRelativeTime(miFecha)

    return (
        <article className="Card">
            <h2>{titulo}</h2>
            {children}
            <footer>
                <p><b>Por: </b>{titulo}</p>
                <p><b>Autor: </b>{autor} </p>
                <p><b>Fecha: </b>{fechaFormateada}</p>
                <p><b>Publicado: </b>{fechaPasada}</p>
            </footer>
        </article>
    )
}

// const BlogPostContador = ({props, childern}) => {
//     console.log(props);
//     return (
//     <article className="card">
//         <h2>{props.title}</h2>
//         <p><b>Fecha: </b>{props.fecha} <b> Autor: </b>{props.autor}</p>
//         <div>{props.children}</div>
//     </article>
//     )
// }

export default BlogPostContador;

//¿Qué es y para qué sirve la prop `children` en React?
// Es un objeto que contiene los elementos que envuelve un componente.
// Componente que se abre y se cierra al final (en el padre) para poder autocompletar cosas en el padre y no en el hijo.
