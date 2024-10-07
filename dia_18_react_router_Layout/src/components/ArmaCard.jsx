

const ArmaCard = ({image, title, description}) => {
    return (
        <div className="Catalogo-div">
            <img className="Catalogo-img" src={`/backend/img/${image}`} alt={title} />
            <h2 className="Catalogo-h2">{title}</h2>
            <p className="Catalogo-p">{description}</p>
        </div>
    );
}

export default ArmaCard;
