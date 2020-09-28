import React, {useState} from 'react';
import { useFirebaseApp, useUser } from 'reactfire';
import 'firebase/auth';
import BD from '../firebaseBD';
import '../Auth/Auth.css'
import Main from '../Main/Main';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebase = useFirebaseApp();
    const [ name, setName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ emailForm, setEmailForm ] = useState('');
    const [ passwordForm , setPasswordForm ] = useState('');
    const user = useUser()
    //Esta funcion registra un nuevo usuario
    const saveUser = async () => {
       await firebase.auth().createUserWithEmailAndPassword(email, password);
        await BD.collection('Users').add({
            name:name,
            lastName: lastName,
            email:email,
        }).then(()=> {
            let modalBody = document.getElementById('modalBody');
            modalBody.innerHTML = 'Usuario registrado correctamente!';
        }).catch(() => {
            let modalBody = document.getElementById('modalBody');
            modalBody.innerHTML = 'Algo salgio mal, intende de nuevo';
        })
    }
    const loginUser = async () => {
        console.log('Login sussefull');
        await firebase.auth().signInWithEmailAndPassword(emailForm, passwordForm).then(() => {
            console.log('ingreso correctamente');
        }).catch(() => {
            console.log('Datos incorrecto, intente de nuevo');
        })
    }
    return(
        <div>
           
            {    
                !user &&
                <div id ="body">
                    <nav className="navbar navbar-light bg-dark">
                        <a className="navbar-brand text-primary">UNIDA-Blog</a>
                        <div className="form-inline">
                            <button type="button" className="btn btn-primary my-2 my-sm-0" data-toggle="modal" data-target="#staticBackdrop">
                                Registrarme
                            </button>
                        </div>
                    </nav>
                    <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Registrate en UNIDA Blog</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body" id = "modalBody">
                                    <div className="card card-body">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder = "Nombre"
                                                className = "form-control"
                                                id = "name"
                                                onChange = {(ev) => setName(ev.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder = "Apellido"
                                                className = "form-control"
                                                id = "lastName"
                                                onChange = {(ev) => setLastName(ev.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                placeholder = "email"
                                                className = "form-control"
                                                id = "email"
                                                onChange = {(ev) => setEmail(ev.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                placeholder = "contraseña"
                                                className = "form-control"
                                                id ="password"
                                                onChange = {(ev) => setPassword(ev.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick = {saveUser}
                                    >Registrarme</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Seccion de Inicio de Sesion*/}
        
                    <div className="row mt-5">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 container">
                            <div className="card card-body w-50 m-auto">
                                <h5 className = "text-center mb-3">Iniciar Sesión</h5>
                                <div className="form-group">
                                    <label> Ingrese su correo:</label>
                                    <input
                                        type="mail"
                                        className = "form-control"
                                        required
                                        onChange = {(ev) => setEmailForm(ev.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Ingrese su contraseña:</label>
                                    <input
                                        type="password"
                                        className = "form-control"
                                        required
                                        onChange = {(ev) => setPasswordForm(ev.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        className = "btn btn-primary btn-block"
                                        onClick = {loginUser}
                                    >
                                        Ingresar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            }
            {
                user && <Main />
            }
        </div>
    )
}
