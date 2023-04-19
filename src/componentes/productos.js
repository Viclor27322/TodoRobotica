import React ,{useEffect,useState,useContext } from 'react'
import axios from 'axios';
import { show_alerta } from '../funtions';
import { AuthContext } from '../Auth/AuthProvider';

export default function Productoss() {
    const urll = 'https://equi.onrender.com/api/productos';
    const [prod,setProducts] = useState([]);
    const [id,setId]= useState('');
    const [nombre,setNombre] = useState('');
    const [Descripcion,setDescripcion]=useState('');
    const [precio,setPrecio]=useState('');
    const [Existencia,setExistencia]=useState(0);
    const [Imagen,setImagen]=useState();
    const [title,setTitle]=useState('');
    const [cantidad,setCantidad]=useState(0);
    const { isAuthenticated,user } = useContext(AuthContext);

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts =async()=>{
        const respuest = await axios.get(urll);
        setProducts(respuest.data);   
        console.log(prod)
    }
    ////para mostrar productos
    const openModal = (id,nombre,Descripcion,precio,Existencia,Categoria,Imagen)=>{
      setTitle('Comprar Producto');
      setId(id);
      setNombre(nombre);
      setDescripcion(Descripcion);
      setPrecio(precio);
      setExistencia(Existencia);
      setImagen(Imagen);
      window.setTimeout(function(){
          document.getElementById('nombre').focus();
      },500);
    }
    ////para comprar
  const comprar=()=>{
    if(user){
        if(Existencia===0){
        show_alerta('Lo sentimos producto agotado','warning');
      }else{
        if(cantidad>Existencia){
        show_alerta('Cantidad no disponible','warning');
        }else{
            axios({method:'POST',url:'',data:{
              usuario:user._id,
              productos:id,
              cantidad:cantidad,
              total:cantidad*precio
            }})
            .then(function(respuesta){
              console.log(respuesta);
              axios({method:'PUT',url:urll+"/"+id,data:{
                existencia:Existencia-cantidad
              }}) 
              getProducts();
              show_alerta('Se realizo la venta correctamente','success');
              document.getElementById('btncerrar').click();  
             
            }).catch(function(error){
                show_alerta('Error en la solicitud','error');
                console.log(error);
            })   
        }
    }
    }else{
      show_alerta('No puede realizar la compra registrese','warning');
    }
  }

  return (
    <div class="contener">
      <div>
        <section id="galeria" className="container  ">
          <div className="row  justify-content-lg-center align-items-center" >
            {prod.map((producto)=>(
              <div className="col-lg-3"  key={producto._id}>
                <section className="description" >
                  <h2>{producto.nombre}</h2>
                  <img src={producto.Imagen}/>
                  <h4>Precio : ${producto.precio}</h4>
                  <label>Existencia: </label>
                  <span className="myRange">
                    <input type="number" id="no2" min="0" tab-index="2" placeholder="0" value={producto.Existencia} />
                  </span>
                  <br/>
                  <button onClick={()=> openModal(producto._id,producto.nombre,producto.Descripcion,producto.precio,producto.Existencia,producto.Categoria,producto.Imagen)} 
                  data-bs-toggle='modal' data-bs-target='#modalProducts' className='btn' id='btn-Agregar'>Ver mas...</button> 
                </section>
            </div>
            )
            )}
        </div>
      </section>
      </div>

      <div id='modalProducts' className='modal fade'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                  <div className='modal-header'>
                      <label className='h5'>{title}</label>
                      <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                  </div>
                  <div className='modal-body'>
                  <div className="">
                      <input type='hidden' id='id' ></input>
                      
                        <img src={Imagen} width='200px' height='200px'/>
                        <section className="description" >
                        <h2 id='nombre' >{nombre}</h2>
                        <p>{Descripcion}</p>  
                        <p>Precio : {precio} </p>
                        <label>Existencia: </label>
                        <span className="myRange">      
                              <input type="number" id="no2" min="0" tab-index="2" placeholder="0" value={Existencia} />
                        </span>
                        <hr/>
                      <label>Cantidad :</label>
                      <input type="number" id="no2" min="0" tab-index="2" placeholder="0" onChange={(e)=> setCantidad(e.target.value)} />
                          </section>
                      
                      </div>
                      <div className='d-grid col-6 mx-auto'>
                          <button  className='btn btn-success' onClick={()=>comprar()}>
                              <i className='fa-solid fa-floppy-disk'></i>Comprar
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