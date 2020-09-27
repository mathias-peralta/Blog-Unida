import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css'
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig = {firebaseConfig}>
    <App />
  </FirebaseAppProvider>
  ,
  document.getElementById('root')
);


