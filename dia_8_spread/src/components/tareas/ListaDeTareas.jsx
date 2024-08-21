import Tarea from "./Tarea";

const ListaDeTareas = ({listaTareas}) => {
    return (
        <div className="Card">
            <h2>Lista de Tareas</h2>
            {
                listaTareas.map(tarea => {
                    // id: 1, nombre: 'Estudiar React', completada: true
                    return(
                        <Tarea key={tarea.id} {...tarea} />
                    )
                })
            }
        </div>
    );
}

export default ListaDeTareas;