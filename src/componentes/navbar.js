import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png';
import ayuda from '../img/ayuda.png';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import '../css/inicio.css'

export default function Navbarr(){
  const history = useNavigate();
  const { isAuthenticated, logout} = useContext(AuthContext);
  const Salir=()=>{
    logout();
    history('/login');
  }
    return(
      <nav class="navegar navegar-expandir-lg navegar-oscuro " id="navegacionprincipal">
        <div class="contenedor"> 
            <a class="navegar-brand fw-negrita d-lg-ninguno"> <img src={logo} width="40" height="40" /> Todo robotica</a>
            <button class="navegar-alternador" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navegarSupportedContent" 
            aria-controls="navegarSupportedContent" 
            aria-expandired="false" 
            aria-label="Toggle navigation">
            <span class="navegar-alternador-icon"></span></button>
            
            <div class="collapse navegar-collapse" id="navegarSupportedContent">
                <ul class="navegar-nav mx-automatico">
                    <li class="elenavegación listasinicio">
                      <Link  class="navegarlink texto-superiorcas" to={'/'}>Inicio</Link>
                    </li>
                    <li class="elenavegación listasinicio">
                      <Link  class="navegarlink texto-superiorcaso" to={'/somos'}>¿Quienes somos?</Link>
                    </li>
                    <li class="elenavegación listasinicio">
                      <Link  class="navegarlink texto-superiorcaso" to={'/productos'}>Catalogo</Link>
                    </li>
                    <li class="elenavegación listasinicio">
                      <Link  class="navegarlink texto-superiorcaso" to={'http://blas.equipounoyseiscommx.com/maceta/mostrar.php'}>Iot</Link>
                    </li>
                    <li class="">
                      {isAuthenticated !== null ? (
                      isAuthenticated ? (
                        <div class="d-flex">
                          <li class="elenavegación listasinicio">
                          <Link  class="navegarlink texto-superiorcaso d-flex" to={'/perfil'}>Perfil</Link>
                          </li>
                          <li class="elenavegación listasinicio">
                          <input type="button" className="navegarlink texto-superiorcaso bg-transparent border-0" onClick={Salir} value="Cerrar Sesíon"/> 
                          </li>
                        </div>
                      ) : (
                        <div className='d-flex '>
                          <li class="elenavegación listasinicio ">
                              <Link  class="navegarlink texto-superiorcaso d-flex" to={'/registro'}>Registro</Link>
                            </li>
                            <li class="elenavegación listasinicio">
                              <Link  class="navegarlink texto-superiorcaso d-flex" to={'/login'}>Inicio de sesión</Link>
                            </li>
                        </div>
                      )
                    ) : null}
                    </li>
                    <li class="elenavegación listasinicio">
                      <Link  class="navegarlink texto-superiorcaso" to={'/ayuda'}>Ayuda</Link>
                    </li>
                    <li class="elenavegación listasinicio">
                      <Link  class="navegarlink texto-superiorcaso" to={'http://blas.equipounoyseiscommx.com/maceta/mostrar.php'}>Iot</Link>
                    </li>
                
                </ul>
            </div>
        </div>
    </nav>
    )      
}
