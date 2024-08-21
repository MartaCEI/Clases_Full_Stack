import Replie from "./Replie";

const Comentario = ({author, date, content, replies}) => {
    return (
        <div className="espacio">
            <h2>Comentario</h2>
            <p><b>{author}</b> - <i>{date}</i></p>
            <p>{content}</p>
            <p className="espacio2"><b>Respuestas:</b></p>
            {
                replies.map((replie)=>{
                    return(
                        <Replie key={replie.id} {...replie} />
                    )
                })
            }
        </div>
    );
}

export default Comentario;