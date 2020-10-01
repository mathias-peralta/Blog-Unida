import React from 'react';
import './App.css';
import Auth from './Auth/Auth'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
