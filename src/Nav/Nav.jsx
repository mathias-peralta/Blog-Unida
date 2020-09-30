import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';


function Nav(){
    const firebase = useFirebaseApp();

    const logout = async () => {
       await firebase.auth().signOut()
    }

    return(
        <nav className="navbar navbar-light bg-dark">
            <a className="navbar-brand text-white">UNIDA-Blog</a>
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