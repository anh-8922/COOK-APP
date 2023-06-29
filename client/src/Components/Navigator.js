import { NavLink, useNavigate } from "react-router-dom";
//import AddNewRecipes from "../Pages/AddRecipePage";
import '../Styles/component.css';
//import { useCookies } from "react-cookie";

export default function Navigator() {
    
    return(
        <div className="NavBar-containter">
            <NavLink className="NavItems" to="/">Home</NavLink>
            <NavLink className="NavItems" to="/addrecipe">Add Recipe</NavLink>
            <NavLink className="NavItems" >Blog</NavLink>
            <NavLink className="NavItems" >Login</NavLink>
        </div>
    )
}