import React, { Component } from 'react';
class Level extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-offset-7 col-md-5'>
                    <form className="form-inline">
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputName2" placeholder="Task Name" />
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option value={1}>Medium</option>
                                <option value={2}>Hight</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Sumbit</button>
                        <button type="submit" className="btn btn-Default">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }

}
export default Level;