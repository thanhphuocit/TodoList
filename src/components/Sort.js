import React, { Component } from 'react';
class Sort extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by<span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a href="#button">Name ASC</a></li>
                        <li><a href="#button">Name DESC</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#button">Level ASC</a></li>
                        <li><a href="#button">Level DESC</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;