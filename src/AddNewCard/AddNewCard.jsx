import React, { Component } from 'react';
import '../AddNewCard/AddNewCard.css';


class AddNewCard extends Component {

    render() {
        return(
            <div>
                <div className = "card card-body mb-3">
                    <p><strong>Agrega una nueva publicacion</strong></p>
                    <button type="button" class="buttonCard" data-toggle="modal" data-target="#exampleModal">
                        ¿Deseas compartir algo?
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="text-cenet" id="exampleModalLabel">Comparte una nueva publicacion</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            <div class="modal-body ">
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="10" className = "form-control" placeholder = "Escribe algo aqui..."></textarea>
                                </div>
                            </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">Publicar</button>
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