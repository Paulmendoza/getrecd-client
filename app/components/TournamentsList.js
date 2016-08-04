import React, { PropTypes } from 'react';
import CreateTournament from '../containers/CreateTournament';
import { Link } from 'react-router';
import Tournament from './Tournament';

const TournamentsList = ({tournaments, selectedTournament, onDeleteTournament, onCreateTournament, onSelectTournament}) => {
    return (
        <div>
        <div className="col-sm-3">
            <CreateTournament onCreateTournament={onCreateTournament} />
            <ul className="list-group">
                {tournaments.map((tournament, index) =>
                    <li className="list-group-item" key={index}>
                    <button className="btn btn-default" onClick={() => onSelectTournament(tournament.id)}>{tournament.name}</button>
                    <button className="btn btn-default" onClick={() => onDeleteTournament(tournament.id)}>x</button>
                    </li>)}
            </ul>
            </div>
        <div>
            <Tournament tournament={selectedTournament}/>
        </div>
        </div>
    );
};

TournamentsList.propTypes = {
    tournaments: PropTypes.array.isRequired,
    onDeleteTournament: PropTypes.func.isRequired
};

export default TournamentsList;

