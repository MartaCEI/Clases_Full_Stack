const JsonProductos = ({listaProductos}) => {
    return (
        
        <div className="Card">
            <h1>Lista de Productos</h1>
            {
                listaProductos.map(({id, name, price, description, image})=>{
                    return (
                        <div className="espacio" key={id}>
                            <p><b>{name}</b> - <i>{price} €</i></p>
                            <img src={image} alt={name} />
                            <p>{description}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default JsonProductos;