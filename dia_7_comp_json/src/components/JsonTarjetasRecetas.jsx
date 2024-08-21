const JsonTarjetasRecetas = ({listaRecetas}) => {

    return (
        <>
        <h1>Tarjetas de Recetas</h1>
            {
                listaRecetas.map(({id,name,image,ingredients})=>{
                    return (
                        <div key={id} className="Card">
                            <h2>{name}</h2>
                            <img src={image} alt={name} />
                            <h3>Ingredinetes:</h3>
                            <ul>
                                { ingredients.map(ingrediente => (<li>{ingrediente}</li>)) }
                            </ul>
                        </div>
                    )
                })
            }
        </>
    );
}

export default JsonTarjetasRecetas;