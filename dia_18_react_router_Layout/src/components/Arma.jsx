const Arma = ({image, title, description, type, damage, Ap, range, DPS, price }) => {
    
    return (
        <>
            <h2 className="Producto-h2">{title}</h2>
            <img className="Producto-img" src={`/backend/img/${image}`} alt={title} />
            <p className="Producto-p">{description}</p>
            <div className="Producto-div">
                <p className="Producto-p"><b>Tipo: </b>{type}</p>
                <p className="Producto-p"><b>Damage: </b>{damage}</p>
                <p className="Producto-p"><b>AP: </b>{Ap}</p>
                <p className="Producto-p"><b>Range: </b>{range}</p>
            </div>
            <p className="Producto-precio"><b>Precio: </b>{price}€</p>
            <button className="Producto-btn">Comprar</button>
        </>
    );
}

export default Arma;