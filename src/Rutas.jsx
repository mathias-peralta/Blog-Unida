import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main/Main';
import Nav from './Nav/Nav'
import Profile from './Profile/Profile';


class Rutas extends Component {
    render(){
        return(
            <Router>
                <Nav />
                <Route path ="/" exact component = {Main}/>
                <Route path = "/Perfil" component = {Profile}/>
            </Router>
        )
    }
}

export default Rutas