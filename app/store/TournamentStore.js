import { createStore } from 'redux';

const counter = (state = {tournaments:[]}, action) => {
  switch (action.type) {
    case 'ADD_TOURNAMENT':
      return Object.assign({}, state, {tournaments:state.tournaments.concat(action.tournament)});
    case 'DELETE_TOURNAMENT':
      const tournaments = state.tournaments
                        .slice(0, action.index)
                        .concat(state.tournaments.slice(action.index + 1));
                        console.log(tournaments);
      return Object.assign({}, state, {tournaments});
    default:
      return state;
  }
} 

const store = createStore(counter);

export default store;