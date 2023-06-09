import React,{useState, useEffect} from 'react';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';

export default function Registro() {
    const url = 'https://proyectonuevo-vercel.vercel.app/api/usuarios';
    const history = useNavigate();
    const [nombre, setNombre] = useState('');
    const [usuario, setUser] = useState('');
    const [correo, setEmail] = useState('');
    const [password1, setPass] = useState('');
    const [password2, setPass2] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(() => {
        setErrorMessage('');
      }, []);
    
    

    const handleRegistro = (e) => {
        e.preventDefault();
        if (! /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/.test(password1)) {
            setErrorMessage('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número para ser aceptada');
            return;
          }
        if (password1 !== password2) {
            setErrorMessage('Las contraseñas no coinciden');
            return;
        } 
        // Validar el correo electrónico
        if (!/\S+@\S+\.\S+/.test(correo)) {
            setErrorMessage("Ingresa un correo electrónico válido");
            return;
          }
        if (!/^[a-zA-Z]+$/.test(nombre)) {
        setErrorMessage("El nombre solo debe tener letras");
        return;
        
        }else{
        fetch(url)
        .then(response => response.json())
        .then(data => {
        const userr = data.find(u => u.correo === correo && u.usuario===usuario);
        if (userr) {
            setErrorMessage('El usuario o correo ya existen');

        }else {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                usuario: usuario,
                password: password1,
                correo: correo
            })
        })
            .then(response => response.json())
            .then(data => {
                //alert(data);
                history('/login');
            })
            .catch(error => {
                console.error(error);
                setErrorMessage('Hubo un error al crear la cuenta');
            });
        }
        })
        }
    };
    return (
        <div class="registrocontenedor">
            <main id="main" className="d-flex w-100 ">

                <div className="container d-flex flex-column">

                    <div className="row vh-50 ">
                        <div className="col-sm-10 col-md-6 col-lg-4 mx-auto d-table h-100 mt-5">
                            <div className="d-table-cell align-middle" >
                                <div className="card card-login rounded-7 bg-light bg-gradient mb-5">
                                    <div className="card-body">
                                        <div className="m-sm-1">
                                            <div className="text-center mb-4">
                                                <h1 className="h2 text-golden fs-3 text-dark">Datos de registro</h1>
                                                <hr />
                                            </div>
                                            {errorMessage !== '' && (
                                                <label className='color-red text-center'>{errorMessage}</label>
                                            )}
                                            <form onSubmit={handleRegistro}>
                                                <div className="mb-3">
                                                    <label className="form-label mb-1 text-primary">Nombre</label>
                                                    <input className="form-control form-control-lg input-login rounded-1 text-black"
                                                        type="text" name="inp_usario" required onChange={(e) => setNombre(e.target.value)}
                                                        placeholder="Introduce tu nombre" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label mb-1 text-primary">Usuario</label>
                                                    <input className="form-control form-control-lg input-login rounded-1 text-black"
                                                        type="text" name="inp_usario" required onChange={(e) => setUser(e.target.value)}
                                                        placeholder="Introduce tu usuario" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label mb-1 text-primary">Correo electrónico</label>
                                                    <input className="form-control form-control-lg input-login rounded-1 text-black"
                                                        type="email" name="inp_email" onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="Introduce tu correo electrónico" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label mb-1 text-primary">Contraseña</label>
                                                    <input className="form-control form-control-lg input-login rounded-1 text-black"
                                                        type="password" name="inp_password"
                                                        title="Primera 6 letras minusculas, una letra mayuscula y 2 digitos"
                                                        onChange={(e) => setPass(e.target.value)}
                                                        placeholder="Crea tu contraseña" id="pass1" required />

                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label mb-1 text-primary">Verificar contraseña</label>
                                                    <input className="form-control form-control-lg input-login rounded-1 text-black"
                                                        type="password" name="inp_verf_password" onChange={(e) => setPass2(e.target.value)}
                                                        placeholder=" Verificar tu contraseña" id="pass2" required />

                                                </div>
                                                <div className="text-center mt-3">
                                                    <button type="submit"
                                                        className="btn btn-lg btn-black  rounded-8">Crear</button>
                                                </div>
                                                <br />

                                                <a href="login" className="account ">Iniciar sesión</a><br />

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