import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router'
import store from '../../store/TournamentStore.js';

class TournamentsList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.tournaments.map((tournament, index) =>
                        <li className="list-group-item" key={index}>
                        <Link display="block" to={`/Tournament`}>
                                {tournament}
                        </Link>
                        <button className="btn btn-default" onClick={() => this.props.deleteTournament(index)}>x</button>
                        </li>)}
                </ul>
            </div>
        );
    }
}

TournamentsList.propTypes = {
    tournaments: PropTypes.array.isRequired
};

export default TournamentsList;