import './Banner.css'
import Banner from '../images/BigImage.png'
import Photo1 from '../images/foto1.png'
import Photo2 from '../images/foto2.png'
import Photo3 from '../images/foto3.png'
import Photo4 from '../images/foto4.png'

function BannerFun() {
    return(
        <div className="body">

        <div className="banner">
        <img src={Banner} alt="FotoBanner" />
        </div>

        <p>Top ventas del momento</p>

        <div className="Products">
           <img src={Photo1} alt="products"/>
           <img src={Photo2} alt="products"/>
           <img src={Photo3} alt="products"/>
           <img src={Photo4} alt="products"/>
          </div>

       </div>

    );
}

export default BannerFun;