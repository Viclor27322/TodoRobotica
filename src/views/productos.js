import React, { Component } from 'react';
import Footer from '../componentes/footerr';
import Navbarr from '../componentes/navbar';
import Productoss from '../componentes/productos';
import Header from '../componentes/header';
import '../css/productos.css';

class Productos extends Component{
    render(){
    return(
        <div id='productos'>
            <div>
                <Header/>
                <Navbarr/>
            </div>
            <div>
                <Productoss/>
            </div>
            <div>
               <Footer/>
            </div>
        </div>
    )      
  }
}

export default Productos;