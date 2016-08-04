import React, {PropTypes} from 'react';

const Tournament = ({tournament}) => {
    console.log(tournament)
    return (
        <div>
        <p>{tournament && tournament.id}</p>
        <p>{tournament && tournament.name}</p>
        <p>{tournament && tournament.numOfTeams}</p>
        </div>
    );
};

Tournament.propTypes = {
    tournaments: PropTypes.object
};

export default Tournament;