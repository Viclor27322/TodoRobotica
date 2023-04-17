import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png';
import ayuda from '../img/ayuda.png';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Auth/useAuth';
import '../css/inicio.css'

export default function Header(){
  const {isLogged} = useAuth();
  const Salir=()=>{
    const {logout} = useAuth();
  }
  const history = useNavigate();
  
    return(
        <header>
        <h1 class="encabeza textocentrado textodesvanecido d-ninguno bloque-d-lg">
            <img class="rounded mx-auto d-block" src={logo} width="80" height="80" />
            <span class="encabeza-masbajo">Todo robótica.</span>
            <span class="encabeza-superior textoprimario mb-3">Somos los mejores</span>
            
        </h1>
    </header>
      
    
    )      
}
