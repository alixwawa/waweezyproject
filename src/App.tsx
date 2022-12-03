import Logo from './Logo.png';
import React from 'react';
import './App.css';
import { Home } from './app/pages/home';

function App() {
  return (
    <div className="App">
      <img src={Logo} className="App-logo" alt="logo" />
      <Home></Home>
    </div>
  );
}

export default App;