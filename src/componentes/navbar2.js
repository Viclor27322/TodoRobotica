import React,{ useContext,useEffect } from 'react'
import logo from '../img/icon-helado.png';
import { useNavigate,Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

function Navbar2() {
  const { isAuthenticated,logout } = useContext(AuthContext);
  const history = useNavigate();
  useEffect(()=>{
    if(!isAuthenticated){
        history('/');
    }
  })
  const Salir=()=>{
    logout();
    history('/login');
  }
  return (

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
                      <Link  class="navegarlink texto-superiorcaso" to={'/ShowUsers'}>Usuarios</Link>
                    </li>
                    <li class="elenavegación listasinicio">
                      <Link  class="navegarlink texto-superiorcaso" to={'/Admin'}>Productos</Link>
                    </li>

                    {isAuthenticated !== null ? (
                      isAuthenticated ? (
                        <div>
                          <li class="elenavegación listasinicio">
                          <input type="button" className="navegarlink texto-superiorcaso bg-primary" onClick={Salir} value="Logout"/> 
                          </li>
                        </div>
                      ) : (
                        <div className='d-flex'>
                          <li class="elenavegación listasinicio">
                              <Link  class="navegarlink texto-superiorcaso" to={'/registro'}>Registro</Link>
                            </li>
                            
                        </div>
                        
                        
                      )
                    ) : null}
                  
                
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar2