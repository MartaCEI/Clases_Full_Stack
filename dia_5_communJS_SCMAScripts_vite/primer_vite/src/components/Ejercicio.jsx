export const Ejercicio = () => {
    const nombre = "Marta";
    const edad = 33;
    const hobbies = ["aaa", "bbb", "ccc"];
    return (
        <>
            <p>Mi nombre es: {nombre}</p>
            <p>Mi edad: {edad}</p>
            <p>Mis hobbies son: </p>
            <ul>
                {
                hobbies.map( (hobby) => {
                    return(
                        <li>{hobby}</li>
                    )
                })
                }
            </ul>
        </>
    );
}
