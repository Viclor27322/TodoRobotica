import React, { Component } from 'react';
import Footer from '../componentes/footerr';
import Sliderr from '../componentes/slider';
import Ubi from '../componentes/ubicacion';
import Navbar from '../componentes/navbar';
import Header from '../componentes/header';

class Userinicio extends Component{
    render(){
    return(
        <div>
            
            <div>
                <Header/>
                <Navbar/>
            </div>
            <div>
                <Sliderr/>
                <Ubi/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Userinicio;

