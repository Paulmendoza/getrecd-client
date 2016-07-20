import React, {Component, PropTypes} from 'react';
import store from '../../store/TournamentStore.js';

class AddTournament extends Component {
    handleSubmit(event) {
        event.preventDefault();
        var newTournament = this.tournament.value;
        this.tournament.value = '';
        this.props.addTournament(newTournament);
        store.dispatch({type : "ADD_TOURNAMENT", tournament: newTournament});
        console.log(store.getState());
    }

    setRef(ref) {
        this.tournament = ref;
    }

    render() {
        return (
            <form className="input-group" onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" className="form-control" placeholder="Create Tournament" ref={(ref) => this.setRef(ref)}/>
                <span className='input-group-btn'>
                <button className="btn btn-default" type="submit">Submit</button>
                </span>
            </form>
        );
    }
}

AddTournament.propTypes = {
    addTournament: PropTypes.func.isRequired,
};

export default AddTournament;