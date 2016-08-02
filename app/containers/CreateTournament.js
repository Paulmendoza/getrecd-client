import React, {Component} from 'react';

class CreateTournament extends Component {
    handleSubmit(event) {
        event.preventDefault();
        var newTournament = { name: this.tournament.value };
        this.tournament.value = '';
        this.props.onCreateTournament(newTournament);
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

export default CreateTournament;