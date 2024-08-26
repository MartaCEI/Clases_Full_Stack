import { Input } from "./formulario/Input";
import { Select } from "./formulario/Select";
import { useState } from "react";

const Registro = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        checkbox: false
    });

    const [errores, setErrores] = useState({});

    const validateForm = () => {
        const objetoErrores = {};
        // hacer nuestras comprobaciones.
        if(!formData.nombre) objetoErrores.nombre="Debes ingresar un nombre";
        if(!formData.apellido) objetoErrores.apellido="Debes ingresar un apellido";
        if(!formData.checkbox) objetoErrores.checkbox="Debes aceptar los términos y condiciones";
        return objetoErrores;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const listaErrores = validateForm();
        // si existe algún error, guardarlo en errores
        // si no, mostrar resultado por consola
        if( Object.keys(listaErrores).length === 0 ){
            console.log("Datos del formulario:", formData);
        } else {
            setErrores(listaErrores);
        }
    }

    const handleChange = (e) => {
        let {name, value} = e.target;

        if(e.target.type == "checkbox") {
            value = e.target.checked;
            console.log("Checkbox value es:", value);
        }

        // setFormData({ ...formData, [name]:value });
        setFormData( prevData => ({ ...prevData, [name]: value}));

        // Limpiar error cuando el usuario empieza a escribir/seleccionar
        setErrores( prevErrores => ({ ...prevErrores, [name]: ""}))
    }

    return (
        <form onSubmit={handleSubmit} className='Card'>
            <h2>Registro</h2>
                {/* input de Nombre */}
                <Input 
                    name="nombre"
                    label="Nombre:"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    error={errores.nombre}
                    className="cssForm"
                    // debug={true}
                />

                {/* input de apellido  */}
                <Input 
                    name="apellido"
                    label="Apellido:"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="cssForm"
                    error={errores.apellido}
                    // debug={true}
                />
    
                    {/* Checkbox */}
                <Input
                    name="checkbox"
                    label="Acepto los términos y condiciones"
                    type="checkbox"
                    value={formData.checkbox}
                    onChange={handleChange}
                    error={errores.checkbox}
                    className="cssForm"
                    // debug={true}
                />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Registro;
