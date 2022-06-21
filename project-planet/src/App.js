import logo from './logo.svg';
import './App.css';
import User from './User';
import React, { useState } from 'react';
import Calendar from 'react-calendar'; 

function App() {
  return (
    <div className="App">
      <User userName='First User' tweet="What a nice day"/>
      <User userName='Tony Stark' tweet="I am Iron Man"/>
      <User userName='Bobb the Bubble' tweet="Halo a chairdean!"/>
      <User userName='Iain agus Anndra' tweet="Obh Obh!!"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
