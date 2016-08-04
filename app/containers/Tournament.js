import { connect } from 'react-redux';
import Tournament from '../components/Tournament';

const mapStateToProps = (state) => {
    return {
        tournament: state.tournaments.tournaments
    }
}

const mapDispatchToProps = (dispatch) => {

}

const TournamentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tournament)

export default TournamentContainer