import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/inicio1.jpeg';
import img2 from '../img/inicio2.jpeg';
import img3 from '../img/inicio3.jpeg';
import '../css/slider.css'

class Sliderr extends Component{
    render(){
    return(
      <Carousel class="carousel">
        <Carousel.Item interval={500}>
          <img className="d-block w-100 h-80" src={img1} alt="First slide"  />
          <Carousel.Caption>
            <h3>“Las grandes oportunidades nacen de haber sabido aprovechar las pequeñas”</h3>
            <p>Bill Gates, cofundador de la empresa de software Microsoft.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 h-80"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>“La ciencia de hoy es la tecnología del mañana”.</h3>
            <p>Edward Teller, físico al que se le atribuye el sobrenombre de “Padre de la bomba H”.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-80"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>“La tecnología es una palabra que describe algo que no funciona todavía”.</h3>
          <p>Douglas Adams, escritor, guionista, famoso por su serie “La guía del autoestopista galáctico”.</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )      
  }
}

export default Sliderr;
