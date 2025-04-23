// importo da react-router l'elemento NavLink
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Homepage</NavLink>
                </li>
                <li>
                    <NavLink to="/posts">Post</NavLink>
                </li>
                <li>
                    <NavLink to="/chi-siamo">Chi siamo</NavLink>
                </li>
            </ul>
        </nav>
    )
}
