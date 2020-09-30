import React, { Component } from 'react';
import BD from '../firebaseBD';

class CardList extends Component {
    state = {
        Card: [],
        id: ''
    }

    componentDidMount () {
        BD.collection('Cards').onSnapshot((snapshot) => {
            this.setState({
                Card: snapshot.docs.map(card => {
                    return({
                        id: card.id,
                        data: card.data()
                    })

                })
            })
        })
    }
    render() {
        return(
        <p>{
            this.state.Card.map((card) =>  (
                <p>{card.data.content}</p>
            ))    
        }</p>
        )
    }
}

export default CardList;