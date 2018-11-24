import React, { Component } from 'react';
class Level extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valueNameTask: '',
            valueLevel: 0
        };
        
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleCancel() {
        this.props.OnClickCancel();
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        this.props.OnClickSubmit(this.state);
        event.preventDefault();
    }
    render() {
        return (
            <div className='row'>
                <div className='col-md-offset-7 col-md-5'>
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" value={this.state.valueNameTask} onChange={this.handleChange} name='valueNameTask' className="form-control" placeholder="Task Name" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" name='valueLevel' value={this.state.valueLevel} onChange={this.handleChange}>
                                <option value={0}>Small</option>
                                <option value={1}>Medium</option>
                                <option value={2}>Hight</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Sumbit</button>
                        <button type="button" onClick={this.handleCancel} className="btn btn-Default">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }

}
export default Level;