import React, {Component} from 'react';
import AddTournament from './AddTournament'
import TournamentsList from './TournamentsList'
import Tournament from './Tournament'
import store from '../../store/TournamentStore.js';

class Tournaments extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.addTournament = this.addTournament.bind(this);
        this.selectTournament = this.selectTournament.bind(this);
    }
    
    addTournament(tournament) {
        var t = this.state.tournaments.concat([tournament]);
        this.setState({ tournaments: t });
    }

    selectTournament(tournament) {
        this.setState({selectedTournament: tournament});
    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-4">
                    <h3>Tournaments</h3>
                    <AddTournament addTournament={this.addTournament} />
                    <TournamentsList tournaments={this.state.tournaments} selectTournament={this.selectTournament} />
                </div>
            </div>
        );
    }
}

export default Tournaments;