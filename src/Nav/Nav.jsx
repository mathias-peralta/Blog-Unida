import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import { Link } from 'react-router-dom';

function Nav(){
    const firebase = useFirebaseApp();

    const logout = async () => {
       await firebase.auth().signOut()
    }

    return(
        <nav className="navbar navbar-light bg-dark">
            <Link className = "navbar-brand text-white" to = "/">
                UNIDA-Blog
            </Link>
            <ul className = "navbar-nav ml-auto">
                <li className = "nav-item">
                    <Link className = "nav-link text-white" to = "/Perfil"> 
                        Mi Perfil
                    </Link>
                </li>
            </ul>
            <div className="form-inline">
                <button
                    className="btn btn-outline-danger my-2 my-sm-0"
                    onClick = {logout}
                >Cerrar Sesión</button>
            </div>
        </nav>
    )
}

export default Nav;