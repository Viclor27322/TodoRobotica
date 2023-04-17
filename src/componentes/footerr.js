import React from 'react';
import '../css/footer.css';
import codigo from '../img/qrl.png'
import face from '../img/facebook.png'
import insta from '../img/instagram.png'
import whats from '../img/whatsapp.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div class="footer-content">
      <section className="sect1_footer_inf text-white">
            
            <div id="footer_inf2" >
                <h2 className="sect2_footer">Contacto</h2>
                <p className="sect2_footer"><i className="fa-solid fa-phone  rs-icons"></i>771 1913179</p>
                <p className="sect2_footer"><i className="fa-solid fa-envelope  rs-icons"></i>todorobotica01@gmail.com</p>
                <div className="sect2_footer">
                    <a href="https://wa.me/547711913179"><i className="fa-brands fa-whatsapp rs-icons  "></i></a>
                    <a href="https://www.facebook.com/Helados-Huastecos-107166528740265/"><i className="fa-brands fa-facebook  rs-icons "></i></a>
                    <img src={codigo} alt="" width="75px" height="75px" />
                </div>
                <div className="sect2_footer">
                  <p>2023 Copyright &copy; Todo Robotica</p>
                </div>
            </div>
        </section>

        <section className="sect3_footer">
            <a  target="_blank"  href="https://instagram.com/todorobotica.01?igshid=YmMyMTA2M2Y=">
            <img src={insta} width="30" height="30"/></a>
            <a  target="_blank"  href="https://www.facebook.com/Todo-Robotica-100956559345957/?ti=as">
            <img src={face}  width="30" height="30"/></a>
            <a  target="_blank" href="https://wa.me/qr/LVPFTGPJNXXNO1">
            <img src={whats}  width="30" height="30"/></a>
        </section>
    </div>
  )
}
