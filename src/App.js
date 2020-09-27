import React from 'react';
import './App.css';
import {useFirebaseApp} from 'reactfire';
import Auth from './Auth/Auth'
function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
