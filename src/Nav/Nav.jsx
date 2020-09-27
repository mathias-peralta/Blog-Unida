import React from 'react';
import { useFirebaseApp, useUser } from 'reactfire';
import 'firebase/auth';


function Nav(){
    const firebase = useFirebaseApp();

    const logout = async () => {
       await firebase.auth().signOut()
    }

    return(
        <nav class="navbar navbar-light bg-dark">
            <a class="navbar-brand text-white">UNIDA-Blog</a>
            <div class="form-inline">
                <button
                    class="btn btn-outline-danger my-2 my-sm-0"
                    onClick = {logout}
                >Cerrar Sesión</button>
            </div>
        </nav>
    )
}

export default Nav;