import React, { Component } from 'react';
import '../AddNewCard/AddNewCard.css';
import BD from '../firebaseBD';
import 'firebase/auth';
import firebase from 'firebase'
class AddNewCard extends Component {
    state = {
        card: [],
        content: '',
        userID: '',
        time: '',
        name: '',
        lastName: ''
    }
    componentDidMount() {
       let userData = BD.collection('Users').doc(firebase.auth().currentUser.uid)
        userData.get().then(
            (doc) => {
                this.setState({
                    name : doc.data().name,
                    lastName: doc.data().lastName
                })
            }
        )   
    }

    contentInput = (ev) => {
        this.setState({
            content: ev.target.value,
        })
    }
     /* guardamos en la coleccion card*/
    saveNewCard = async () => {
       await BD.collection('Cards').doc().set({
            content: this.state.content,
            userID: firebase.auth().currentUser.uid,
            time: new Date(),
            name: this.state.name,
            lastName: this.state.lastName
        }).then(() => {
            let modalBody = document.getElementById('modalBody');
            document.getElementById('modalButton').disabled = true;
            modalBody.innerHTML = "Publicado exitosamente!"
        }).catch(() => {
            console.log('Algo salio mal, intente de nuevo');
        })
    }
    render() {
        return(
            <div>
                <div className = "card card-body mb-3" id = "AddCardBody">
                    <p><strong>Agrega una nueva publicacion</strong></p>
                    <button type="button" className="buttonCard text-muted" data-toggle="modal" data-target="#exampleModal">
                        ¿Deseas compartir algo?
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="text-cenet" id="exampleModalLabel">Comparte una nueva publicacion</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            <div className="modal-body " id = "modalBody">
                                <div className="form-group">
                                    <textarea
                                        required
                                        name="cardContent"
                                        id=""
                                        cols="30"
                                        rows="10"
                                        className = "form-control"
                                        placeholder = "Escribe algo aqui..."
                                        onChange = {this.contentInput}
                                    ></textarea>
                                </div>
                            </div>
                                <div className="modal-footer">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        id = "modalButton"
                                        onClick = {()=> this.saveNewCard()}
                                    >Publicar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default AddNewCard;