import { combineReducers } from 'redux';
import { DEAL, DRAW, HELD_CARD } from './actions';

function cards(state = [], action) {
    switch (action.type) {
      case DEAL:
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
      case DRAW:
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

const reducers = combineReducers({
    cards
});

export default reducers;