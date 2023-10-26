import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footertwo from "../components/Footertwo";


function Principal(){
    return(
        <div>
            <header className="App">
                <Logo />
                <Navbar />
            </header>
            <Banner/>
            <footer>
                <Footer />
                

            </footer>

        </div>
    );

}

export default Principal;