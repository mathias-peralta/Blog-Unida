import React, { Component } from 'react';
import BD from '../firebaseBD';
import Card from '../Card/Card'

class CardList extends Component {
    state = {
        Card: [],
        id: ''
    }

    componentDidMount () {
        BD.collection('Cards')
        .orderBy("time","desc")
        .onSnapshot((snapshot) => {
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
        <div>{
            this.state.Card.map((card) =>  (
                <Card datas = {card}/>
            ))    
        }</div>
        )
    }
}

export default CardList;