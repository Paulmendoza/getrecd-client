import React from 'react';

const Games = () => {
    return (
        <div>
            <h1>Games</h1>
            <div className="col-md-6 game">
            <table className="rounds table">
                <thead>
                    <tr>
                        <th>Team 1</th>
                        <th></th>
                        <th>Team 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td><td>Round 1</td><td></td>
                    </tr>
                    <tr>
                        <td>5</td><td></td><td>25</td>
                    </tr>
                    <tr>
                        <td></td><td>Round 2</td><td></td>
                    </tr>
                    <tr>
                        <td>5</td><td></td><td>25</td>
                    </tr>
                    <tr>
                        <td></td><td>Round 3</td><td></td>
                    </tr>
                    <tr>
                        <td>5</td><td></td><td>25</td>
                    </tr>
                    
                </tbody>
            </table>

            <div>
                <span className="win-text">Team 2 wins!</span>
            </div>

            </div>
        </div>
    );
};

export default Games;