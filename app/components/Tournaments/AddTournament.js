import React, {Component, PropTypes} from 'react';

class AddTournament extends Component {
    handleSubmit() {
        var newTournament = this.tournament.value;
        this.tournament.value = '';
        this.props.addTournament(newTournament);
    }

    setRef(ref) {
        this.tournament = ref;
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Create Tournament" ref={(ref) => this.setRef(ref)}/>
                <span className='input-group-btn'>
                <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}>Submit</button>
                </span>
            </div>
        );
    }
}

AddTournament.propTypes = {
    addTournament: PropTypes.func.isRequired,
};

export default AddTournament;