
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Principal from './Pages/Principal';
import Bicicletas from './Pages/Bicicletas';




export default function App(){
  return(
    <div className="App">
      
      <Routes>
        <Route index Component ={Principal}/>
        <Route path='/pages/Bicicletas' Component={Bicicletas}/>
        

      </Routes>

      
    </div>
  );
}



