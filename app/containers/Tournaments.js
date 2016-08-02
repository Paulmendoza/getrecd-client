import { connect } from 'react-redux';
import TournamentsList from '../components/TournamentsList';
import Tournament from '../components/Tournament';
import CreateTournament from './CreateTournament';
import { getCurrentTournament } from '../reducers/GetRecd'

const mapStateToProps = (state) => {
    return {
        tournaments: state.tournaments.tournaments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateTournament: (tournament) => {
            dispatch({type:"ADD_TOURNAMENT", tournament})
        },
        onDeleteTournament: (id) => {
            dispatch({type:"DELETE_TOURNAMENT", id})
        }
    }
}

const Tournaments = connect(
    mapStateToProps,
    mapDispatchToProps
)(TournamentsList);

export default Tournaments;