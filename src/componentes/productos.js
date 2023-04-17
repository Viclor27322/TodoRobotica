import React ,{useEffect,useState} from 'react'
import mango from '../img/img3.jpg';
import axios from 'axios';

export default function Productoss() {
    const urll = 'https://equi.onrender.com/api/productos';
    const [prod,setProducts] = useState([]);
    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts =async()=>{
        const respuest = await axios.get(urll);
        setProducts(respuest.data);   
        console.log(prod)
    }
  return (
    <div class="contener">
    <section id="galeria" className="container  ">

      <div className="row  justify-content-lg-center align-items-center" >
        {prod.map((producto)=>(
          <div className="col-lg-3" /*style={{height: 400}}*/ key={producto._id}>
         
          <section className="description" >
            <h2>{producto.nombre}</h2>
            <img src={producto.Imagen}/>
            <p>{producto.Descripcion}</p>
            <h4>Precio : {producto.precio}</h4>
            <label>Existencia: </label>
            <span className="myRange">
              
              <input type="number" id="no2" min="0" tab-index="2" placeholder="0" value={producto.Existencias} />
            </span>
            <br/>
            <a href="#" className="btn" id="btn-Agregar">Ver mas...</a>
          </section>
        </div>
        )
          
        )}
      </div>
    </section>
    </div>
  )
}
