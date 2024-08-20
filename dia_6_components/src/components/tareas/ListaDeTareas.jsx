import Tarea from "./Tarea";

const ListaDeTareas = ({listaTareas}) => {
    return (
        <div className="Card">
            <h2>Lista de Tareas</h2>
            {
                listaTareas.map(element => {
                    // id: 1, nombre: 'Estudiar React', completada: true
                    const {id, nombre, isCompletada} = element;
                    return(
                        <Tarea key={id} nombre={nombre} isCompletada={isCompletada} />
                    )
                })
            }
        </div>
    );
}

export default ListaDeTareas;