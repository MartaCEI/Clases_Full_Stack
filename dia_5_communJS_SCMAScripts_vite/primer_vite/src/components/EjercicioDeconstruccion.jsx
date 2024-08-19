const EjercicioDeconstruccion = ({nombreD, edadD, hobbiesD}) => {
    return (
        <>
            <p>Mi nombre es: {nombreD}</p>
            <p>Mi edad: {edadD}</p>
            <p>Mis hobbies son: </p>
            <ul>
                {
                hobbiesD.map( (hobby) => {
                    return(
                        <li>{hobby}</li>
                    )
                })
                }
            </ul>
        </>
    );
}

export default EjercicioDeconstruccion;