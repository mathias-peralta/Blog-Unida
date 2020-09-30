import React, { Component } from 'react';
import { format }from 'timeago';
import '../Card/Card.css'

class Card  extends Component {

    render(){
        const { datas } = this.props
        console.log(this.props.datas.time.data);
        return(
            <div className="card card-body mb-3" id = "cardBody" key = { datas.userID }>
                <p><strong>{ datas.name } { datas.lastName }</strong> -</p>
                <p>{ datas.content }</p>
            </div>
        )
    }
}

export default Card;