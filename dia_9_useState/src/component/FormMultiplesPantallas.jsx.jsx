import { useState } from "react";
import { Input } from "./formulario/Input";

const FormMultiplesPantallas = () => {
    const [pantalla, setPantalla] = useState(1);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
    }); 

    const handleSiguiente = () => {
        setPantalla(pantalla => Math.min(pantalla + 1, 3));
    }

    const handleAnterior = () => {
        setPantalla(pantalla => Math.max(pantalla - 1, 1));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado con los datos:", formData);
    }

    const renderizarPasos = () => {
        switch(pantalla){
            case 1:
                return <Paso1 data={formData} setData={setFormData} />;
            case 2:
                return <Paso2 data={formData} setData={setFormData} />;
            case 3:
                return <Paso3 data={formData} setData={setFormData} />;
            default:
                return null;
        }   
    }

    return (
    <>
        
        <form onSubmit={handleSubmit} className="Card">
            <h2>MultiStepForm</h2>
            <p>Este formulario tiene varias pantallas, pero solo se muestra una a la vez</p>
            {/* los inputs */}
            
            
            
            {/* los botones */}
            {pantalla > 1 && <button onClick={handleAnterior}>Anterior</button>}
            {pantalla < 3 && <button onClick={handleSiguiente}>Siguiente</button>}  
            {renderizarPasos()}
            <button type="submit">Enviar</button>
        </form>
    </>
    );
}

const Paso1 = ({data, setData}) => (
    <div>
        <h3>Página 1</h3>
        <input 
            name={data.nombre}
            label="Nombre:"
            type="text"
            value={data.nombre}
            placeholder="Nombre"
            onChange={(e) => setData({ ...data, nombre: e.target.value })}
        />
    </div>
)

const Paso2 = ({data, setData}) => (
    <div>
        <h3>Página 2</h3>
        <input
            name="email"
            label="Email:"
            type="email"
            value={data.email}
            placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
        />
    </div>
)

const Paso3 = ({data}) => (
    <div>
        <h3>Confirmacion de datos</h3>
        <p>Nombre: {data.nombre}</p>
        <p>Email: {data.email}</p>
    </div>
)

export default FormMultiplesPantallas;