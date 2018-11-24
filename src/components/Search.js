import React, { Component } from 'react';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClearInput = this.handleClearInput.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSearch() {
        //console.log(this.state.value);
        //ref prop.onclickSearch
        this.props.onclickSearch(this.state.value);
    }
    handleClearInput() {
        this.setState({value: ''});
        this.props.onclickSearch('');
    }
    render() {
        return (
            <div className="col-lg-4">
                <div className="input-group">
                    <input value={this.state.value} type="text" onChange={this.handleChange} className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button onClick={this.handleClearInput} className="btn btn-default" type="button">Clear</button>
                        <button onClick={this.handleSearch} className="btn btn-info" type="button">Search</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;