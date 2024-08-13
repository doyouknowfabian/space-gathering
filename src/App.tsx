import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  let playerName = "Player";
  return (
    <div className="App">
      <header className="App-header">
        <h1>SPACE<br></br>GATHERING</h1>
        
        
        <div>
          <label htmlFor="playerName">Enter Your Name Below</label><br></br>
          <input id="playerName" placeholder={playerName}></input><br></br><br></br>
          <a href="#" className="playButton">PLAY</a>
        </div>
      </header>
    </div>
  );
}

export default App;
