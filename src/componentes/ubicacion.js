import React, { Component } from 'react';
class Ubi extends Component{
    render(){
    return(
        <div class="ubicacion">
            <h1 className='text-center p-2 b-0'>Ubicación </h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.5065785718216!2d-98.38385667929974!3d21.155932457592918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7241137fcba83%3A0xe2f82e61bdfa4544!2s43000%20Charco%20Azul%2C%20Hgo.!5e0!3m2!1ses!2smx!4v1667342850073!5m2!1ses!2smx"
                class="sc-b11w6b-3 dSwXXL"width="600" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className='w-100 p-2'></iframe>
        </div>
    )      
  }
}

export default Ubi;