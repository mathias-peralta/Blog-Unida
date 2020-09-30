import React, { Component } from 'react';
import '../AddNewCard/AddNewCard.css';
import BD from '../firebaseBD';

class AddNewCard extends Component {
    state = {
        card: [],
        content: ''
    }
    contentInput = (ev) => {
        this.setState({
            content: ev.target.value
        })
    }
     /* guardamos en la coleccion card*/
    saveNewCard = () => {
        BD.collection('Cards').doc().set({
            content: this.state.content
        }).then(() => {
            console.log('Guardado exitosamente');
        }).catch(() => {
            console.log('Algo salio mal, intente de nuevo');
        })
    }
    render() {
        return(
            <div>
                <div className = "card card-body mb-3">
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
                            <div className="modal-body ">
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