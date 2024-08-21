const JsonRestaurante = ({restaurante}) => {
    const {menu} = restaurante;
    const {entrantes, principales, postres} = menu
    return (
        <div className="Card">
            <h1>Menú restaurante</h1>
            <h2 className="espacio">Entrantes</h2>
            {
            entrantes.map(({id,nombre,precio,descripcion}) => {
                return (
                    <div key={id}>
                    <p><b>{nombre}</b></p>
                    <p><i>{precio} €</i></p>
                    <p>{descripcion}</p>
                    </div>
                )
            })
            }
            <h2 className="espacio">Principales</h2>
            {
                principales.map(({id,nombre,precio,descripcion}) => {
                    return (
                        <div key={id}>
                        <p><b>{nombre}</b></p>
                        <p><i>{precio} €</i></p>
                        <p>{descripcion}</p>
                        </div>
                    )
                })
            }
            <h2 className="espacio">Postres</h2>
            {
                postres.map(({id,nombre,precio,descripcion}) => {
                    return (
                        <div key={id}>
                        <p><b>{nombre}</b></p>
                        <p><i>{precio} €</i></p>
                        <p>{descripcion}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default JsonRestaurante;






// const Json = () => {
//     return (
//         <div className="Card">
//         </div>
//     );
// }

// export default Json;