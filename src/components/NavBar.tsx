import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex gap-4">
                <li>
                    <Link to="/">Home/Inicio</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;