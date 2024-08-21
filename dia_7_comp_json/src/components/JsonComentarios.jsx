const JsonComentarios = ({listaComentarios}) => {

    return (
        <div className="Card">
            <h1>Lista de Comentarios</h1>
            {
                listaComentarios.map(({id, author, date, content, replies})=>{
                    return(
                        <div key={id} className="espacio">
                            <h2>Comentario</h2>
                            <p><b>{author}</b> - <i>{date}</i></p>
                            <p>{content}</p>
                            <p className="espacio2"><b>Respuestas:</b></p>
                            {
                                replies.map(({id, author, date, content})=>{
                                    return(
                                        <div key={id}>
                                            <p><b>{author}</b> - <i>{date}</i></p>
                                            <p>{content}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default JsonComentarios;