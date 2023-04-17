import React from 'react'
import Registro from '../componentes/registro'
import Footer from '../componentes/footerr'
import Navbarr from '../componentes/navbar'
import Header from '../componentes/header';

export default function registro() {
  return (
    <div>
      <Header/>
      <Navbarr/>    
      <Registro/>
      <Footer/>
    </div>
  )
}
