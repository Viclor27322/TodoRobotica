import React, { Component } from 'react';
import Navbar2 from '../componentes/navbar2';
import Header from '../componentes/header';
import ShowProductos from '../componentes/showProducts';
import ShowUsers from '../componentes/ShowUsers';
class Admin extends Component{
    render(){
    return(
        <div>
            
            <div>
                <Header/>
                <Navbar2/>
                <ShowProductos/>
            </div>
        </div>
    )      
  }
}

export default Admin;