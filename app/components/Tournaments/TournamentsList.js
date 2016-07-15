import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router'

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
                        </li>)}
                </ul>
            </div>
        );
    }
}

TournamentsList.propTypes = {
    tournaments: PropTypes.array.isRequired,
    selectTournament: PropTypes.func.isRequired,
};

export default TournamentsList;