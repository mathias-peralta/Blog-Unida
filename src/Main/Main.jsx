import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Card from '../Card.json';
import AddNewCard from '../AddNewCard/AddNewCard';
class Main extends Component {
    
    render() {
        
        return(
           <div>
               <Nav/>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="card card-body">
                            <h5>¡Bienvenido!</h5>
                            <p>Mathias Peralta</p>
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
