import { createStore } from 'redux';

const counter = (state = {tournaments:[]}, action) => {
  switch (action.type) {
    case 'ADD_TOURNAMENT':
      return Object.assign({}, state, {tournaments:state.tournaments.concat(action.tournament)});
    default:
      return state;
  }
} 

const store = createStore(counter);

export default store;