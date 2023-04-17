import React from 'react';
import '../css/terminos.css'

function Ayuda() {
  return (
    <div class="contenido">
        <div class="main-conteiner2">
        <h1 class="ayuda_text">Ayuda</h1>
        <hr/>
        <h4>¿MÉTODOS DE PAGO? </h4>
        <p>
          El sitio web “Todo Robótica” acepta pagos por medio de 
          tarjeta de débito, crédito y visa: Esto se lleva a cabo 
          después de seleccionar los productos que desea comprar, 
          posteriormente proporcionar los datos de la tarjeta y del 
          dueño. Si los datos coinciden se le hará llegar una 
          notificación al correo electrónico y el pedido será 
          validado para el envió. Transferencia: Por esta media la 
          página oficial de “Todo Robótica” proporciona la opción de
          transferencia de pago esto tendrá un proceso muy similar 
          al de una tarjeta solo que en este caso tendrá el usuario 
          que responder un formulario y mandar evidencia de la 
          transferencia de pago para iniciar el proceso de envío.
        </p>
        <h4>¿CÓMO CREO UNA CUENTA? </h4>
        <p>
        Para crear una cuenta ve al apartado de “Registrarse” en la parte inferior del inicio de sesión posteriormente responde el formulario que se le indica. Al finalizar el proceso, si es validada la información que nos proporcionó podrá iniciar sesión con los datos que ha ingresado.           
        </p>
        <h4>¿COMO REESTABLECER MI CONTRASEÑA?</h4>
        <p>
        Para reestablecer la contraseña nos dirigimos al apartado de “¿Has olvidado tu contraseña?” posteriormente responder el formulario que se indica, si las respuestas coinciden a la cuenta que desea recuperar se le mandara un correo electrónico con la nueva contraseña reestablecida.
        </p>
        <h4>¿COMO REALIZAR UNA CANCELACION?</h4>
        <p>
        Una vez confirmado su pedido y/o envío este dispondrá de un plazo de 72 horas o 3 días para cancelarlo el plazo de tiempo se quedaría registrada en la base de datos y de ahí partirá el conteo de las 72 horas. Para hacer el proceso de cancelación tendrá que llamar a los servicios de “Todo Robótica” de lo contrario el pedido se enviará y no podrá contar con la cancelación.
        </p>
        </div>
    </div>
  )
}

export default Ayuda
