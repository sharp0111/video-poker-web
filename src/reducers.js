import { combineReducers } from 'redux';
import { START_GAME, DEAL_CARDS, DRAW_CARDS, TOGGLE_CARD, CALC_POINTS } from './actions';

const initialState = {
  card_id: 0,
  currentScore: 0,
  startBackCards: [],
  dealCards: [],
  deck: [],
  drawnCards: []
};

function Game (state = initialState, action) {
    switch (action.type) {
      case START_GAME:
        return initialState.startBackCards;
      case DEAL_CARDS:
        return [
          ...state,
          {
            type: DEAL_CARDS,
            card_id,
            cards
          }
        ]
      case DRAW_CARDS:
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      default:
        return state
    }
}

const cards = (state = [], action) => {
  switch (action.type) {
    case 'GET_CARDS':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          held: false
        }
      ]
    case 'TOGGLE_CARD':
      return state.map(card =>
        (card.id === action.id)
          ? {...card, held: !card.held}
          : card
      )
    default:
      return state
  }
}

const reducers = combineReducers({
    Game,
    cards
});

export default reducers;