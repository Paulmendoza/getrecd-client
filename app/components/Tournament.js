import React, {PropTypes} from 'react';

const Tournament = ({tournament}) => {
    return (
        <div>
            {tournament && <li className="list-group-item">{tournament.value}</li>}
        </div>
    );
};

Tournament.propTypes = {
    tournament: PropTypes.object,
};

export default Tournament;