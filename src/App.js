
import './App.css';
import LogoImg from './components/Logo';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Footertwo from './components/Footertwo';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <LogoImg />
        <Navbar />
        
       </header>
       


      <div className="Banner">
        <Banner/>
        </div>

      <Footer/>
      <Footertwo/>
    </div>
  );
}

export default App;
