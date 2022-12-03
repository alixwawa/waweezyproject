import Logo from './Logo.png';
import React from 'react';
import './App.css';
import { Home } from './app/pages/home';

const myNameis = 'alix wawa';

function App() {
  return (
    <div className="App">
      <Home name={myNameis}></Home>
      <img src={Logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;