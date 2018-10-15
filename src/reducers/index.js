import React from 'react';
import { combineReducers } from 'redux';
import { generateNewDeck, shuffle, deal, draw } from '../helpers/Deck';

const initialState = {
  deck: [],
  hand: [],
  credit: 0,
  gameStarted: false,
  gameEnded: false
};

export const startNewGame = (state=initialState) => {
    const newGameDeck = shuffle(generateNewDeck());
    const newGameHand = deal(5);
    return {
        ...state,
        deck: newGameDeck,
        hand: newGameHand,
        credit: 0,
        gameStarted: true,
        gameEnded: false
    }
}

export const toggleCard = (state, action) => {
    state.hand[action.cardIdx].cardState = action.cardState;
    return {
        ...state
    }
}

export const calculateCredit = () => {

}

const reducers = combineReducers({
    startNewGame,
    toggleCard,
    calculateCredit
});

export default reducers;