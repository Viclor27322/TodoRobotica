import React from 'react'
import Footer from '../componentes/footerr'
import Navbarr from '../componentes/navbar'
import Login from '../componentes/login'
import Header from '../componentes/header';

export default function login() {
  return (
    <div>
      <Header/> 
      <Navbarr/>
      <Login/>
      <Footer/>
    </div>
  )
}
