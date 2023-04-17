import React, {Component} from "react";
import img1 from '../img/img3.jpg';
import img2 from '../img/img4.jpg';
import img3 from '../img/img5.jpg';
import img4 from '../img/img6.jpg';
import img5 from '../img/img7.jpg';
import '../css/preview.css'

class Prod extends Component{
    render(){
    return(
        <section className="portafolio">
        <div className="contenedor">
          <h1 className="text-center b-auto">Productos</h1>
          <div className="galeria-port">
            <div className="imagen-port">
              <img src={img1} alt="..."/>
            </div>
            <div className="imagen-port">
                <img src={img2} alt="..."/>
            </div>
            <div className="imagen-port">
                <img src={img3} alt="..."/>
            </div>
            <div className="imagen-port">
                <img src={img4} alt="..."/>
            </div>
            <div className="imagen-port">
                <img src={img5} alt="..."/>
            </div>
          </div>
        </div>
      </section>       
    )
    }
}

export default Prod;