import { NavLink } from "react-router-dom";
import '../Styles/component.css';

export default function Navigator() {
    return(
        <div className="NavBar-containter">
            <NavLink>Home</NavLink>
            <NavLink>Story</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Login</NavLink>
        </div>
    )
}