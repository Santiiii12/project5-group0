import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar (){

    return(
    <div className='Navbar'>
        <Link to="/Pages/Bicicletas" >Deportes</Link>
        <a href="/">Mujer</a>
        <a href="/">Hombre</a>
        <a href="/">Infantil</a>
        <a href="/">Equipamiento</a>
        <a href="/">Nutricion y salud</a>
        <a href="/">Descuentos </a> 

    </div>
);
}

export default Navbar;
