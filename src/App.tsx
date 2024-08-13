import React, { Component } from 'react';
import logo from './logo.svg';
import { redTri, greenTri, blueTri, yellowTri } from './sprites'
import { Gameboard } from './components';
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
        <Gameboard>
          <img src={redTri} width="50px" height="50px"/>
          <img src={greenTri} width="50px" height="50px"/>
          <img src={blueTri} width="50px" height="50px"/>
          <img src={yellowTri} width="50px" height="50px"/>
        </Gameboard>
      </header>
    </div>
  );
}

export default App;
