import "../components/Bicis.css";
import React from "react";
import Bicis from "../components/bicis.json";



let Imagenes = ({product}) => (
        <div className="products">
            <img src={product.url} alt={product.name} className="prodimage"/>
            <h3 className="bikenames"> {product.name}</h3>
        </div>
)


function Bicisfun (){
      return(
        <div className="prodcontainer">
            {Bicis.map(product =>(
                           <Imagenes key={product.id} product={product} />
            ))}
        </div>
      );

}

export default Bicisfun;

