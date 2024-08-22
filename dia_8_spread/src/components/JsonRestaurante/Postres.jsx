const Postres = ({nombre,precio,descripcion}) => {
    return (
        <>
            <p><b>{nombre}</b></p>
            <p><i>{precio} €</i></p>
            <p>{descripcion}</p>
        </>
    );
}

export default Postres;