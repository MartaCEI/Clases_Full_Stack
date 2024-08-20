import "../css/App.css"

const TarjetaDeUsuario = ({nombre, edad, ocupacion}) => {
    return (
        <div className="Card">
            <p>Mi nombre es {nombre}</p>
            <p>Mi edad es {edad}</p>
            <p>Mi ocupacion es {ocupacion}</p>
        </div>
    );
}

export default TarjetaDeUsuario;