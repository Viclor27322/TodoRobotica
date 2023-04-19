import { useContext,useEffect } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { useNavigate,Link } from 'react-router-dom';
import Bienvenido from '../img/bienvenida.jpg'


const UserProfile = () => {
  const { isAuthenticated,user } = useContext(AuthContext);
  const history=useNavigate();
  useEffect(()=>{
    if(!isAuthenticated){
        history('/');
    }
});

  return (
    <div className='row  justify-content-center text-center '>
       {isAuthenticated !== null ? (
              isAuthenticated ? (
                <div className='col-5 '>
                    <div className="card mb-3" >
                            <div className="row g-0 justify-content-center">
                                <div className="col-md-8">
                                <div className="card-body">
                                <h3 className="card-title">Bienvenido usuario</h3>
                                <img src={Bienvenido} class="img-fluid rounded-start" alt="..."/>
                                <h5 className='card-text'>Perfil: {user.nombre}</h5>
                                <h5 className='card-text'>Usuario: {user.usuario}</h5>
                                <h5 className='card-text'>Correo: {user.correo}</h5>
                                <h5 className='card-text'>{user.rol[0].descripcion}</h5>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              ) : (
                <div>
                 
                </div>
              )
            ) : null}
    </div>
  );
};

export default UserProfile;