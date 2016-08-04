let tournamentId = 0;

const reducer = (state = {tournaments:[]}, action) => {
  switch (action.type) {
    case 'ADD_TOURNAMENT':
      const tournament = action.tournament;
      tournament.id = tournamentId++;
      return Object.assign({}, state, {tournaments:state.tournaments.concat(tournament)});
    case 'DELETE_TOURNAMENT':
      const tournaments = state.tournaments
                        .filter(function(obj) {
                          if('id' in obj && obj.id === action.id) { return false }
                          else { return true }
                        });
                        console.log(state);
      if(state.selected && action.id === state["selected"].id) { 
        return Object.assign({}, state, {tournaments}, { selected: {}})
      }
      else {
        return Object.assign({}, state, {tournaments})
      }
    case 'SELECT_TOURNAMENT':
      const t = state.tournaments
              .filter(function(obj) {
                if('id' in obj && obj.id === action.id) { return true }
                          else { return false }
              })[0]
      return Object.assign({}, state, {selected: t});
    default:
      return state;
  }
} 

export default reducer;

export function getCurrentTournament(state) {
  console.log()
  return reducer(state, {type: 'BLAH'}).tournaments
}