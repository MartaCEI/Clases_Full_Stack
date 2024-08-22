import Menu from "./Menu";

const JsonRestaurante = (restaurant) => {
    return (
        <div className="Card">
            <h1>Menú restaurante</h1>
            <Menu {...restaurant} />
        </div>
    );
}

export default JsonRestaurante;