const Tarea = ({nombre, isCompletada}) => {
    return (
        <>
            <p>{nombre}</p>
            {
                isCompletada && (
                    <button>Eliminar tarea</button>
                ) 
            }
            <button>Completar tarea</button>
        </>
    );
}

export default Tarea;