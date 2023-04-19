import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../funtions';
import { AuthContext } from '../Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const ShowUsers = () => {
    const urll = 'https://proyectonuevo-vercel.vercel.app/api/usuarios';
    const [users,setProducts] = useState([]);
    const [id,setId]= useState('');
    const [nombre,setNombre] = useState('');
    const [usuario,setUsuario]=useState('');
    const [password,setPassword]=useState('');
    const [correo,setCorreo] = useState('');
    const [operacion,setOperacion]=useState(1);
    const [title,setTitle]=useState('');
   
    const { isAuthenticated } = useContext(AuthContext);
    const history = useNavigate();

    useEffect(()=>{
        getUsers();
    },[]); 
    useEffect(()=>{
        if(!isAuthenticated){
            history('/');
        }
    }) 

    const getUsers =async()=>{
        const respuest = await axios.get(urll);
        setProducts(respuest.data);   
    }
    const openModal = (op,id,nombre,usuario,password,correo)=>{
        setId('');
        setNombre('');
        setUsuario('');
        setPassword('');
        setCorreo('');
        setOperacion(op);
        if(op===1){
            setTitle('Registar Usuario');
        }
        else if(op===2){
            setTitle('Editar Usuario');
            setId(id);
            setNombre(nombre);
            setUsuario(usuario);
            setPassword(password);
            setCorreo(correo);
        }
        window.setTimeout(function(){
            document.getElementById('nombre').focus();
        },500);
    }
    const validar =()=>{
        var parametros;
        var metodo;
        if(nombre.trim()===''){
            show_alerta('Escribe el nombre','warning');
        }
        else if(usuario===''){
            show_alerta('Escribe la nombre del usuario','warning');
        }
        else if(password===''){
            show_alerta('Escribe el contraseña del usuario','warning');
        }
        else if(correo===''){
            show_alerta('Escribe el correo del usuario','warning');
        }else{
            parametros={nombre:nombre,usuario:usuario,password:password,correo:correo};
            if(operacion===1){
                //Guardar();
                metodo='POST';
                enviarSolicitudG(metodo,parametros);
            }else{
                metodo='PUT';
                enviarSolicitudE(metodo,parametros,id);
            }
        }
    }
    const enviarSolicitudG= async(metodo,parametros)=>{
        await axios({method:metodo,url:urll,data:parametros})
        .then(function(respuesta){
            show_alerta("Se Agrego correctamente","success");
            document.getElementById('btncerrar').click();
            getUsers();
    
        }).catch(function(error){
            show_alerta('Error en la solicitud','error');
            console.log(error);
        })
    }
    const enviarSolicitudE= async(metodo,parametros,id)=>{
        await axios({method:metodo,url:urll+'/'+id,data:parametros})
        .then(function(respuesta){
           show_alerta("Se actualizo correctamente","success");
           document.getElementById('btncerrar').click();
            getUsers();
        }).catch(function(error){
            show_alerta('Error en la solicitud','error');
            console.log(error);
        })
    }

    const deleteProduct = (id,nombre)=>{
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title:'Seguro que quiere eliminar el Usuario '+nombre+'?',
            icon:'question',text:'No se podra dar marcha atras',
            showCancelButton:true,confirmButtonText:'Si, eliminar',cancelButtonText:'Cancelar'
        }).then((result)=>{
            if((result.isConfirmed)){
                axios({method:'DELETE',url:urll+'/'+id})
                .then(function(respuesta){
                show_alerta('Se elimino correctamente','success');;
                getUsers();
                }).catch(function(error){
                    show_alerta('Error en la solicitud','error');
                    console.log(error);
                })
            }else{
                show_alerta('El Usuario NO fue eliminado','info');
            }
        })
    }

    return (
    <div className='App'>
      <div className='container-fluid'>
        <div className='row mt-3'>
            <div className='col-md-4 offset-md-4'>
                <div className='d-grid mx-auto'>
                    <button onClick={()=> openModal(1)} className='btn btn-success' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                        <i className='fa-solid fa-circle-plus'></i>Agregar
                    </button>
                </div>
            </div>
        </div>
        <div className='row mt-2'>
          <div className='col-12 col-lg-10 offset-0 offset-lg-2 '>
            <div className='table-responsive'>
             <table className='table table-bordered text-black'>
                    <thead>
                        <tr><th>#id</th><th>Nombre</th><th>Usuario</th><th>Contraseña</th><th>Correo</th><th></th></tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {users.map(({ _id, nombre, usuario, password, correo }, i)=>(
                            <tr key={_id} >
                                <td>{(i+1)}</td>
                                <td>{nombre}</td>
                                <td>{usuario}</td>
                                <td>{password}</td>
                                <td>{correo}</td>
                                <td>
                                    <button onClick={()=> openModal(2,_id,nombre,usuario,password,correo )} 
                                        className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                        <i className='fa-solid fa-edit'></i>
                                    </button>
                                    &nbsp; {/* Sirve para dar un espacio*/}
                                    <button onClick={()=>deleteProduct(_id,usuario)} className='btn btn-danger'>
                                        <i className='fa-solid fa-trash'> </i>
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            
            </div>
          </div>
        </div>
      </div>
      <div id='modalProducts' className='modal fade'>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <label className='h5'>{title}</label>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                </div>
                <div className='modal-body'>
                    <input type='hidden' id='id'></input>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                        <input type='text' id='nombre' className='form-control' placeholder='Nombre' value={nombre}
                        onChange={(e)=> setNombre(e.target.value)}></input>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                        <input type='text' id='nombreUsers' className='form-control' placeholder='Nombre de usuario' value={usuario}
                        onChange={(e)=> setUsuario(e.target.value)}></input>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'><i className='fa-solid fa-dollar-sign'></i></span>
                        <input type='password' id='contra' className='form-control' placeholder='Contraseña' value={password}
                        onChange={(e)=> setPassword(e.target.value)}></input>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'><i className='fa-brands fa-apple'></i></span>
                        <input type='email' id='correo' className='form-control' placeholder='Correo electronico' value={correo}
                        onChange={(e)=> setCorreo(e.target.value)}></input>
                    </div>

                    <div className='d-grid col-6 mx-auto'>
                        <button onClick={()=>validar()} className='btn btn-success'>
                            <i className='fa-solid fa-floppy-disk'></i>Guardar
                        </button>
                    </div>
                </div>
                <div className='modal-footer'>
                    <button id='btncerrar' type='buttton' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ShowUsers