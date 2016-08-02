let tournamentId = 0;

const reducer = (state = {tournaments:[]}, action) => {
  switch (action.type) {
    case 'ADD_TOURNAMENT':
      var tournament = { id: ++tournamentId, name: action.tournament.name };
      return Object.assign({}, state, {tournaments:state.tournaments.concat(tournament)});
    case 'DELETE_TOURNAMENT':
      const tournaments = state.tournaments
                        .filter(function(obj) {
                          if('id' in obj && obj.id === action.id) { return false }
                          else { return true }
                        })
      return Object.assign({}, state, {tournaments});
    default:
      return state;
  }
} 

export default reducer;

export function getCurrentTournament(state) {
  console.log()
  return reducer(state, {type: 'BLAH'}).tournaments
}