import { combineReducers } from 'redux';
import { DEAL_CARDS, DRAW_CARDS, TOGGLE_CARD, CALC_POINTS } from './actions';

function Deck (state = [], action) {
    switch (action.type) {
      case DEAL_CARDS:
        return [
          ...state,
          {
            text: action.text,
            completed: false
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
    Deck,
    cards
});

export default reducers;