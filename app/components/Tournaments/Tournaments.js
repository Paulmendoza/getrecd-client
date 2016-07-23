import React, {Component} from 'react';
import AddTournament from './AddTournament'
import TournamentsList from './TournamentsList'
import Tournament from './Tournament'
import store from '../../store/TournamentStore.js';

class Tournaments extends Component {
    constructor(props) {
        super(props);
        this.addTournament = this.addTournament.bind(this);
    }

    addTournament(tournament) {
        store.dispatch({type:"ADD_TOURNAMENT", tournament});
    }

    deleteTournament(index){
        store.dispatch({type:"DELETE_TOURNAMENT", index});
    }
    
    render() {
        return (
            <div>
                <div className="col-lg-4">
                    <h3>Tournaments</h3>
                    <AddTournament addTournament={this.addTournament} />
                    <TournamentsList tournaments={store.getState().tournaments} deleteTournament={this.deleteTournament} />
                </div>
            </div>
        );
    }
}

export default Tournaments;