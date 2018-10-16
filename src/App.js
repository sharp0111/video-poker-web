import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { startGame, toggleCardState, drawCard, calculateCredit } from './actions';

import Header from './components/Header';
import Start from './components/Start';
import EndGame from './components/EndGame';
// import Credit from './components/Credit';
// import Hand from './components/Hand';
// import Play from './components/Play';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Start />
        <EndGame />

        {/* <Hand /> */}
        {/* <Play /> */}
        {/* <Credit credit={props.credit} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
	gameState: state
});

const mapDispatchToProps = dispatch => ({
	startGame: () => {
		dispatch(startGame());
	},
	toggleCardState: (dispatch) => {
		dispatch(toggleCardState());
  },
  drawCard: (dispatch) => {
    dispatch(drawCard());
  },
	calculateCredit: () => {
		dispatch(calculateCredit());
	}
});

const PokerGame = connect(mapStateToProps, mapDispatchToProps)(App);
export default PokerGame;
