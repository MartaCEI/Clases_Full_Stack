import Comentario from "./Comentario";

const JsonComentarios = ({listaComentarios}) => {

    return (
        <div className="Card">
            <h1>Lista de Comentarios</h1>
            {
                listaComentarios.map((comentario)=>{
                    return (
                        <Comentario key={comentario.id} {...comentario} />
                    )
                })
            }
        </div>
    );
}

export default JsonComentarios;