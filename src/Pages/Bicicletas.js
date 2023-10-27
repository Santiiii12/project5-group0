import React  from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import Footertwo from "../components/Footertwo";
import Bicisfun from "../components/Bicis";


const Bicicletas = () =>{
    return(
        <div>
           
            <Logo />
            <Navbar />
            
            <h2>Bicicletas</h2>
            <Bicisfun />
            <Footer />
            <Footertwo />
            

            
        </div>
    );

    }

    export default Bicicletas;




