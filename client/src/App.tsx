import Logo from './Logo.png';
import React, {useEffect, useState} from 'react';
import './App.css';
import { Home } from './app/pages/home';

function App() {

  const [backendData, setBackendData] = useState([{

  }]);

  useEffect(() => {
    fetch("/users").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);

  return (
    <div className="App">
      <img src={Logo} className="App-logo" alt="logo" />
      <Home></Home>
    </div>
  );
}

export default App;