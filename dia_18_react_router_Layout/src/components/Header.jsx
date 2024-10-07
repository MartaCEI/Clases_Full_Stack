import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
            <h1 className="Header-h1">Rimworld</h1>
            <nav className="Header-nav">
                <ul className="Header-ul">
                    <li className="Header-li">
                        <NavLink className="Header-a" to={"/"}>Home</NavLink>
                    </li>
                    <li className="Header-li">
                        <NavLink className="Header-a" to={"catalogo"}>Catálogo</NavLink>
                    </li>
                    <li className="Header-li">
                        <NavLink className="Header-a" to={"carrito"}>Carrito</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;