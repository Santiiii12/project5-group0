
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Principal from './Pages/Principal';




export default function App(){
  return(
    <div className="App">
      
      <Routes>
        <Route index Component ={Principal}/>
        

      </Routes>

      
    </div>
  );
}



