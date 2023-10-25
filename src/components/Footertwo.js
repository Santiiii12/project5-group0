import './Footertwo.css'
import Footerpicone from '../images/footer1.png'
import Footerpictwo from '../images/footer2.png'
import Footerpicthree from '../images/footer3.png'
import Footerpicfour from '../images/footer4.png'





function Footertwo() {
       return (

        <section className="Footertwo">
            
            <div className="Listtwo">
                <h4>PREGÚNTANOS LO QUE QUIERAS</h4>

             <img src={Footerpicone} alt="footer1" />

            </div>


           

           <div className="Listtwo">
               <h4>APP DECATHLON</h4>

            <img src={Footerpictwo} alt="footer2" />
           
           </div>



           <div className="Listtwo"> 
                <h4>REDES SOCIALES</h4>

            <img src={Footerpicthree} alt="footer3" />
           
           
           </div>


           
           <div className="Listtwo"> 
                <h4>PARTNER</h4>

            <img src={Footerpicfour} alt="footer4" />
           
           </div>


          </section>


          )

       }

       export default Footertwo;


