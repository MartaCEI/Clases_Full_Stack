

const ArmaCard = ({image, title, description, price}) => {
    return (
        <div className="Catalogo-div">
            <img className="Catalogo-img" src={`/backend/img/${image}`} alt={title} />
            <h2 className="Catalogo-h2">{title}</h2>
            <p className="Catalogo-p">{description}</p>
            <p className="Catalogo-precio">{price}€</p>
            <button className="Catalogo-btn-filter">Comprar</button>
        </div>
    );
}

export default ArmaCard;
