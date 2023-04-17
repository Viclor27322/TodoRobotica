import React, { Component } from 'react';
import Footer from '../componentes/footerr';
import Sliderr from '../componentes/slider';
import Ubi from '../componentes/ubicacion';
import Navbar from '../componentes/navbar';
import Header from '../componentes/header';
import Navbar2 from '../componentes/navbar2';
import ShowUsers from '../componentes/ShowUsers';

class Users extends Component{
    render(){
    return(
        <div>
            
            <div>
                <Header/>
                <Navbar2/>
                <ShowUsers/>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Users;

