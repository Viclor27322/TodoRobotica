import React,{useState} from 'react';
import '../css/login.css';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { show_alerta } from '../funtions';

export default function Recuperacion() {
  const history = useNavigate();
  const [nombre, setNombre] = useState('');
  const [showPasswordComponent, setShowPasswordComponent] = useState(false);
  const [usuario,setUser]=useState([]);
  const [password, setPassword] = useState('');
  const [confirmCorreo, setConfirmCorreo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    fetch('https://proyectonuevo-vercel.vercel.app/api/usuarios')///  https://https://proyectonuevo-vercel.vercel.app/api/login
    .then(response => response.json())
    .then(data => {
      const user = data.find(u => u.nombre === nombre);//nombre: nombre,
      if(user){
        setUser(user);
        setPassword(user.usuario);
        setShowPasswordComponent(true);
      } else {
        setErrorMessage('El nombre no existe en la base de datos');
      }
    })
    .catch(error => {
      console.error(error);
      setErrorMessage('Hubo un error al procesar la solicitud');
    });
    
  }

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if(usuario.correo===confirmCorreo){
        show_alerta('Su contraseña es: '+usuario.usuario ,'success');
        history('/login');
    }else{
        setErrorMessage('Ingreso un correo erronea');
    }
  }
  return (
    <div>
      
    <main id="main" className="d-flex w-100 bg-black">

    <div className="container d-flex flex-column">
        <div className="row vh-100">
            <div className="col-sm-10 col-md-6 col-lg-4 mx-auto d-table h-100">
                <div className="d-table-cell align-middle">
                    <div className="card card-login rounded-7">
                        <div className="card-body">
                            <div className="m-sm-1">
                                <div className="text-center mb-4">
                                    <img src={logo} alt="Logo" className="img-fluid " width="100" />
                                </div>{errorMessage !== '' && (
                                        <label  className='color-red text-center'>{errorMessage}</label>
                                      )}
                                         <div className="container">
                                            {showPasswordComponent ?
                                                <form onSubmit={handlePasswordSubmit}>
                                                <div className="mb-2">
                                                    <label className="form-label mb-1 text-primary">Nombre usuario</label>
                                                    <input className="form-control form-control-lg input-login rounded-1 text-black"
                                                        type="text" name="inp_usario" value={password} 
                                                        placeholder="Introduce tu respuesta" required />
                                                </div>
                                                <div className="mb-2">
                                                    <label className="form-label mb-1 text-primary">Ingrese correo</label>
                                                    <input className="form-control form-control-lg input-login rounded-1 text-black"
                                                        type="text" name="inp_usario" value={confirmCorreo} onChange={(event) => setConfirmCorreo(event.target.value)} 
                                                        placeholder="Introduce tu correo" required />
                                                </div>

                                                

                                                <button className='btn btn-primary j-c' type="submit">
                                                    Confirmar
                                                </button>
                                                </form>
                                                :
                                                <form onSubmit={handleEmailSubmit}>
                                                <div className="mb-2">
                                                    <label className="form-label mb-1 text-primary">Nombre </label>
                                                    <input className="form-control form-control-lg input-login rounded-1 text-black"
                                                        type="emal" name="inp_usario" value={nombre} onChange={(event) => setNombre(event.target.value)}
                                                        placeholder="Ingrese su nombre" required />
                                                </div>
                                                

                                                {errorMessage &&
                                                    <div className="alert alert-danger">
                                                    {errorMessage}
                                                    </div>
                                                }

                                                <button className='btn btn-primary' type="submit">
                                                    Recuperar Contraseña
                                                </button>
                                                </form>
                                            }
                                            </div>
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