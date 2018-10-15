// import { combineReducers } from 'redux';
import { START_GAME, TOGGLE_CARD_STATE, DRAW_CARD, CALCULATE_CREDIT } from '../actions';
import { generateNewDeck, shuffle } from '../helpers/Deck';
import deal from '../helpers/Hand';

const initialState = {
  gameDeck: [],
  currHand: [],
  totalCredit: 0,
  gameStarted: false,
  gameEnded: false,
  evalHand: ''
};

export const startNewGame = (state) => {
    const newGameDeck = shuffle(generateNewDeck());
    const newGameHand = deal(5, newGameDeck, state.currHand);
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
    return state.currHand.map((card, id) => (id === action.cardIdx)
        ? {...card, held: !card.held} : card
    );
}

export const drawCard = (currDeck, currHand) => {
    currDeck = deal(null, currDeck, currHand);
    return currDeck;
}

export const calculateCredit = (state) => {
    const straight = 500;
    const pair = 100;
    let currCredit = state.totalCredit;

    // Sort Hand by Unicode Code Point
    let cmp = (a, b) => a > b ? 1 : a < b ? -1 : 0;
    const sortedHand = state.currHand.sort((a, b) => cmp(a.rank, b.suit));;

    // Calculate Straight
    for (let i = 0; i < sortedHand.length; i++) {
        if ((sortedHand[i]+1) === sortedHand[i+1]) {
            currCredit += straight;
        }
    }

    // Calculate Pair
    const uniqueHand = new Set(sortedHand);
    for (let i = 0; i < sortedHand.length; i++) {
        if (uniqueHand.size < sortedHand.length) {
            currCredit += pair;
        }
    }

    return {
        ...state,
        state: {
            totalCredit: currCredit,
            gameStarted: false,
            gameEnded: true,
            evalHand: ''
        }
    }
}

const Reducer = (state=initialState, action) => {
    switch(action.type) {
        case START_GAME:
            return startNewGame(state);
        case TOGGLE_CARD_STATE:
            return toggleCard(state, action);
        case DRAW_CARD:
            return deal(null, state.gameDeck, state.currHand);
        case CALCULATE_CREDIT:
            return calculateCredit(state);
        default:
            return state;
    }
}

export default Reducer;