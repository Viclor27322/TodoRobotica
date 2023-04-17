import React,{useState,useContext} from 'react';
import '../css/login.css';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Auth/useAuth';
import { AuthContext } from '../Auth/AuthProvider';
import { Alert } from 'bootstrap';

export default function Login() {
  const url = 'https://proyectonuevo-vercel.vercel.app/api/usuarios';
  const {login} = useContext(AuthContext);
  const history = useNavigate();
  const [usuario,setUser]=useState('');
  const [correo, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

/*   const handleLogin =(e) => {
    e.preventDefault();
    if (password.length < 2) {
      setErrorMessage('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const user = data.find(u => u.correo === correo && u.password === password && u.usuario===usuario);
        if (user) {
          login(user);
          if(user.rol[0].rol==="Usuario"){
            history('/Userinicio');
          }
          else{
            history('/admin');
          }
        } else {
          setErrorMessage('El correo electrónico o la contraseña son incorrectos');
        }
        console.log(user);
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('Hubo un error al iniciar sesión');
      });

  }; */
  const handleLogin = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await fetch('https://proyectonuevo-vercel.vercel.app/api/login', {
        method: 'POST',
        body: JSON.stringify({ correo: correo, password: password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        const rol = data.rol;
        console.log(rol);
        login(data);
        if(rol==="user"){
          history('/Userinicio');
        }
        else{
          history('/Admin');
        }
      } else {
        setErrorMessage('El correo electrónico o la contraseña son incorrectos');
      }
    } catch (error) {
      console.error(error);
        setErrorMessage('Hubo un error al iniciar sesión');
    }
  }
  return (
    <div class="contenedorlogin"> 
      
    <main class="contener" id="main" className="d-flex w-100">

    <div className="container d-flex flex-column">

        <div className="row vh-100">
            <div className="col-sm-10 col-md-6 col-lg-4 mx-auto d-table h-100">
                <div className="d-table-cell align-middle">
                  <div className="card card-login rounded-7">
                        <div className="card-body">
                            <div className="m-sm-1">
                                <div class="imglogin" >
                                    <img  src={logo} alt="Logo" className="img-fluid " width="100" />
                                </div>{errorMessage !== '' && (
                                        <label  className='color-red text-center'>{errorMessage}</label>
                                      )}
                                    <form onSubmit={handleLogin}>
                                        
                                    <div className="mb-2">
                                        <label className="form-label mb-1 text-primary">Usuario</label>
                                        <input className="form-control form-control-lg input-login rounded-1 text-black"
                                            type="text" name="inp_usario" onChange={(e)=>setUser(e.target.value)}
                                            placeholder="Introduce tu usuario" required />
                                    </div>
                                      <div className="mb-2">
                                        <label className="form-label mb-1 text-primary">Correo electrónico</label>
                                        <input className="form-control form-control-lg input-login rounded-1 text-black"
                                            type="email" name="inp_email" onChange={(e)=>setEmail(e.target.value)}
                                            placeholder="Introduce tu correo electrónico" required/>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label mb-1 text-primary">Contraseña</label>
                                        <input className="form-control form-control-lg input-login rounded-1 text-black"
                                            type="password" name="inp_password" onChange={(e)=>setPassword(e.target.value)}
                                            placeholder="Ingresa tu contraseña" required/>

                                    </div>

                                    <div className="text-center mt-3">
                                        <input  type="submit" className="btn btn-lg btn-black  rounded-8" value="Iniciar sesión"/>
                                    </div>
                                    <br/>

                      
                                    <a href="recuperar_passw.php" className="account ">¿Se te olvidó tu contraseña?</a>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </main>
    </div>
  )
}
