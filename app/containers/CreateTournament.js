import React, {Component} from 'react';

class CreateTournament extends Component {
    constructor(props) {
        super(props);
        this.form = [];
    }
    
    handleSubmit(event) {
        event.preventDefault();
        var newTournament = {};
        this.form.forEach(function(formRef) {
            newTournament[formRef.name] = formRef.value;
            formRef.value = '';
        });
        this.props.onCreateTournament(newTournament);
    }
    
    setRef(ref) {
        if(ref && !this.form.includes(ref)) { this.form.push(ref) }
    }

    render() {
        return (
            <form className="input-group" onSubmit={(e) => this.handleSubmit(e)}>
                <label>name<input name="name" type="text" className="form-control" placeholder="name" ref={(ref) => this.setRef(ref)}/></label>
                <label># of teams<input name="numOfTeams" type="number" defaultValue="2" min="2" className="form-control" placeholder="# of teams" ref={(ref) => this.setRef(ref)}/></label>
                <label># of pools<input name="numOfPools" type="number" defaultValue="1" min="1" className="form-control" placeholder="# of pools" ref={(ref) => this.setRef(ref)}/></label>
                <button className="btn btn-default" type="submit">Submit</button>
            </form>
        );
    }
}

export default CreateTournament;