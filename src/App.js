import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import GetCards from './containers/GetCards';
import UpdateScore from './containers/UpdateScore';
import DealOrDraw from './components/DealOrDraw';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Video Poker</h1>
        <div>
          <h2>Winning Hands:</h2>
          <p>Straight (500 points): Five cards of consecutive rank. Example: 9♠️ 10♠️ J♦️ Q♥️ K♦️</p>
          <p>Pair (100 points): Two cards of the same rank. Example: 5♣️ 5♦️</p>
        </div>
        <UpdateScore />
        <GetCards />
        <DealOrDraw />
      </div>
    );
  }
}

export default App;
