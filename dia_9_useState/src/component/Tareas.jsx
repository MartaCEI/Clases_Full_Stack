import { useState } from "react";

const Tareas = () => {

    const [listaTareas, setListaTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    const handleAgregarTareas = () => {
        // si el input esta vacio o tiene espacios en blanco, no hacer nada.
        if(nuevaTarea.trim() === ""){
            return;
        }
        // Agregar la tarea a la listaTareas
        setListaTareas([...listaTareas, nuevaTarea]);
        // Limpiar el input
        setNuevaTarea("");
        // Notificar al usuario que la tarea fue agregada
        // alert("Tarea agregada");
    }

    return (
        <div className="Card">
            <h2>Lista de Tareas</h2>
            <input id="nombre" type="text" 
                value={nuevaTarea}
                onChange={(e) => {
                    setNuevaTarea(e.target.value);
            }}/>
            <button onClick={handleAgregarTareas}>Agregar</button>
            <ul>
                {
                listaTareas.map((lista, index) => (
                    <li key={index}>{lista}</li>
                ))
                }
            </ul>
        </div>
    );
}

export default Tareas;  