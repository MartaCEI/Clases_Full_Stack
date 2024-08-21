const Producto = (({id, name, price, description, image}) => {
    return (
        <div className="espacio" key={id}>
            <p><b>{name}</b> - <i>{price} €</i></p>
            <img src={image} alt={name} />
            <p>{description}</p>
        </div>
    )
})

export default Producto;