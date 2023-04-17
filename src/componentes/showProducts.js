import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../funtions';
import { AuthContext } from '../Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const ShowProductos = () => {
    const urll = 'https://equi.onrender.com/api/productos';
    const [products,setProducts] = useState([]);
    const [id,setId]= useState('');
    const [nombre,setNombre] = useState('');
    const [descripcion,setDescripcion]=useState('');
    const [precio,setPrecio]=useState('');
    const [existencia,setExistencia]=useState('');
    const [operacion,setOperacion]=useState(1);
    const [categoria,setCategoria] = useState('');
    const [title,setTitle]=useState('');
    const [imagen,setImagen]=useState(null);
    const { isAuthenticated } = useContext(AuthContext);
    const history = useNavigate();

    useEffect(()=>{
        getProducts();
    },[]);/* 
   useEffect(()=>{
        if(!isAuthenticated){
            history('/');
        }
    })  */

    const getProducts =async()=>{
        const respuest = await axios.get(urll);
        setProducts(respuest.data);   
    }
    const openModal = (op,id,nombre,descripcion,precio,existencia,categoria)=>{
        setId('');
        setNombre('');
        setDescripcion('');
        setPrecio('');
        setExistencia('');
        setOperacion(op);
        setCategoria('');
        if(op===1){
            setTitle('Registar Producto');
        }
        else if(op===2){
            setTitle('Editar Producto');
            setId(id);
            setNombre(nombre);
            setDescripcion(descripcion);
            setPrecio(precio);
            setExistencia(existencia);
            setCategoria(categoria);
        }
        window.setTimeout(function(){
            document.getElementById('nombre').focus();
        },500);
    }
    const validar =()=>{
        var parametros;
        var metodo;
        if(nombre.trim()===''){
            show_alerta('Escribe el nombre del producto','warning');
        }
        else if(descripcion===''){
            show_alerta('Escribe la descripcion del producto','warning');
        }
        else if(precio===''){
            show_alerta('Escribe el precio del producto','warning');
        }
        else if(existencia===''){
            show_alerta('Escribe la existencia del producto','warning');
        }
        else if(categoria===''){
            show_alerta('Escribe la categoria del producto','warning');
        }
        else{
            if(operacion===1){
                enviarSolicitudG();
            }else{
                //Editar();
                parametros={nombre:nombre,Descripcion:descripcion,Precio:precio,Existencias:existencia,Categoria:categoria};
                metodo='PUT';
                enviarSolicitudE(metodo,parametros,id);
            }
        }
    }
    
    const enviarSolicitudG= async()=>{
        try {
            if(imagen===''){
                show_alerta("ingresa la imagen",'error');
            }else{
            const formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('Descripcion', descripcion);
            formData.append('Imagen', imagen);
            formData.append('precio', precio);
            formData.append('Existencia',1);
            formData.append('Categoria',categoria);
            fetch(urll, {
                method: 'POST',
                body: formData
            })
            getProducts();
            show_alerta("se inserto todo correctamente",'success');
            document.getElementById('btncerrar').click();
            
        }
          } catch (error) {
            show_alerta('Error en la solicitud', 'error');
            console.log(error);
          }
    }
    const enviarSolicitudE= async(metodo,parametros,id)=>{
        await axios({method:metodo,url:urll+'/'+id,data:parametros})
        .then(function(respuesta){
           var tipo = respuesta.data[0];
           var msj = respuesta.data[1];
           console.log(respuesta);
           show_alerta(msj,tipo);
           document.getElementById('btncerrar').click();  
           getProducts();
        }).catch(function(error){
            show_alerta('Error en la solicitud','error');
            console.log(error);
        })
    }

    const deleteProduct = (id,nombre)=>{
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title:'Seguro que quiere eliminar el producto '+nombre+'?',
            icon:'question',text:'No se podra dar marcha atras',
            showCancelButton:true,confirmButtonText:'Si, eliminar',cancelButtonText:'Cancelar'
        }).then((result)=>{
            if((result.isConfirmed)){
                axios.delete(urll+'/'+id)
                .then(function(respuesta){
                var tipo = respuesta.data[0];
                var msj = respuesta.data[1];
                show_alerta(msj,tipo);
                        document.getElementById('btncerrar').click();
                        getProducts();
                }).catch(function(error){
                    show_alerta('Error en la solicitud','error');
                    console.log(error);
                })
            }else{
                show_alerta('El producto NO fue eliminado','info');
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
                        <i className='fa-solid fa-circle-plus'></i>Agregar producto
                    </button>
                </div>
            </div>
        </div>
        <div className='row mt-3'>
          <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
            <div className='table-responsive'>
            <table className='table table-bordered text-white'>
                    <thead>
                        <tr><th>#id</th><th>Producto</th><th style={{ width: '150px' }}>Imagen</th><th>Descripcion</th><th>Precio</th><th>Existencia</th><th>Categoria</th><th></th></tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {products.map((product,i)=>(
                            <tr key={product._id}>
                                <td>{(i+1)}</td>
                                <td>{product.nombre}</td>
                                <th>
                                    <div className='w-50'><img src={product.Imagen} className="w-100 h-100"/></div></th>
                                <td>{product.Descripcion}</td>
                                <td>{product.precio}</td>
                                <td>{product.Existencia}</td>
                                <td>{product.Categoria}</td>
                                <td>
                                    <button onClick={()=> openModal(2,product._id,product.nombre,product.Descripcion,product.Precio,product.Existencias,product.Categoria)} 
                                        className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                        <i className='fa-solid fa-edit'></i>
                                    </button>
                                    &nbsp; {/* Sirve para dar un espacio*/}
                                    <button onClick={()=>deleteProduct(product._id,product.nombre)} className='btn btn-danger'>
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
                        <input type='text' id='descripcion' className='form-control' placeholder='Descripcion' value={descripcion}
                        onChange={(e)=> setDescripcion(e.target.value)}></input>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                        <input type='file' id='imagen' className='form-control' required accept="image/png,image/jpeg"
                        onChange={(e)=>{
                            const selectedFile = e.target.files[0];
                            // Valida si el archivo seleccionado es una imagen y si su tamaño es menor a 3 MB
                            if(selectedFile&&selectedFile.type.includes("image/")){
                                setImagen(selectedFile); // Actualiza el estado de "imagen" con el archivo seleccionado
                            } else {
                                // Muestra un mensaje de error si el archivo seleccionado no es una imagen o su tamaño es mayor a 3 MB
                                alert("Por favor selecciona una imagen con un tamaño menor a 3 MB.");
                                e.target.value = null; // Limpia el valor del input para permitir seleccionar otro archivo
                              }
                            }}
                            ></input>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'><i className='fa-solid fa-dollar-sign'></i></span>
                        <input type='number' id='precio' className='form-control' placeholder='Precio' value={precio}
                        onChange={(e)=> setPrecio(e.target.value)}></input>
                    </div>
                    
                    <div className='input-group mb-3'>
                        <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                        <input type='number' id='existencia' className='form-control' placeholder='Existencia' value={existencia}
                        onChange={(e)=> setExistencia(e.target.value)}></input>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                        <input type='text' id='Categoria' className='form-control' placeholder='Categoria' value={categoria}
                        onChange={(e)=> setCategoria(e.target.value)}></input>
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

export default ShowProductos