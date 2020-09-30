import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Card from '../Card.json';
import AddNewCard from '../AddNewCard/AddNewCard';
import 'firebase/auth';
import firebase from 'firebase'
import BD from '../firebaseBD';

class Main extends Component{
    state = {
        name: '',
        email: ' '
    }
    componentDidMount() {
        let persona = BD.collection('Users').doc(firebase.auth().currentUser.uid)
        persona.get().then(
            (doc) => {
                this.setState({
                    name : doc.data().name,
                    email: doc.data().email
                })
            }
        )
            

    }

    render() {
        console.log(this.state.name);
        const { name, email } = this.state
        return(
            <div>
                <Nav/>
                {this.Person}
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="card card-body">
                            <h5>¡Bienvenido!</h5>
                            <p>{name}</p>
                            <p>{email}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <AddNewCard />
                        {
                            Card.map(card => {
                                return(
                                    <div className="card card-body  mb-3">
                                        <p><strong>{card.username}</strong> - <span className = "text-muted">{card.time}</span></p>
                                        <p>{card.content}</p>
                                        <img src={card.image} alt="" className = "img-responsive"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-3"></div>

                </div>
            </div>

        )
    }
}



export default Main;
