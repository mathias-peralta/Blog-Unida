import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import AddNewCard from '../AddNewCard/AddNewCard';
import 'firebase/auth';
import firebase from 'firebase'
import BD from '../firebaseBD';
import CardList from '../CardList/CardList'
import '../Main/Main.css'

class Main extends Component{
    state = {
        name: '',
        email: '',
        lastName: ''
    }
    componentDidMount() {
        let persona = BD.collection('Users').doc(firebase.auth().currentUser.uid)
        persona.get().then(
            (doc) => {
                this.setState({
                    name : doc.data().name,
                    email: doc.data().email,
                    lastName: doc.data().lastName
                })
            }
        )   
    }

    render() {
        console.log(this.state.name);
        const { name, email, lastName } = this.state
        return(
            <div>
                <Nav/>
                {this.Person}
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="card card-body mb-3 m-auto" id = "cardLeft">
                            <h5>¡Bienvenido!</h5>
                            <p>{name} {lastName}</p>
                            <p><strong>Correo:</strong> {email} </p>
                            <p><strong>Ultimo Ingreso:</strong> <span> Jueves 12</span></p>
                            <p><strong>Publicaciones:</strong> <span> 3</span></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <AddNewCard />
                        <CardList />
                    </div>
                    <div className="col-md-3"></div>

                </div>
            </div>

        )
    }
}



export default Main;
