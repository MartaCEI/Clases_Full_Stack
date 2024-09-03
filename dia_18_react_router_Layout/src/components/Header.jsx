import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Header</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/"}></NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;