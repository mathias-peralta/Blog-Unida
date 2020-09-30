import React, { Component } from 'react';
import { format }from 'timeago';
import '../Card/Card.css'
import BD from '../firebaseBD';
import Bd from '../firebaseBD';
class Card  extends Component {
    
    deleteCard = async(id) => {
        console.log(id);
        await BD.collection('Cards').doc(id).delete()
        .then(() => {
            console.log('Borrado exitosamente');
        })
        .catch(() => {
            console.log('No se pudo borrar el elemento');
        })
    }    
    render(){
        console.log(this.props.datas.data.name);
        return(
            <div className="card card-body mb-3" id = "cardBody" key = {this.props.datas.id} >    
                <div className="row">
                    <div className="col-sm-10" id ="colmd10">
                        <p><strong>{this.props.datas.data.name} {this.props.datas.data.lastName}</strong></p>
                    </div>
                    <div className="col-sm-2" id ="deleteButton">
                        <button
                            className = "btn btn-danger ml-auto"
                            onClick = {() => this.deleteCard(this.props.datas.id)}
                        >
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash ml-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                    <p> {this.props.datas.data.content}</p>
            </div>
        )
    }
}

export default Card;