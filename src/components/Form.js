import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
class Form extends Component {
  constructor(props)
  {
    super(props);
    
  this.handleShowInput= this.handleShowInput.bind(this);
  }
  handleShowInput()
  {
    this.props.onclickAdd();
  }
 render()
  {
    return (
      <div className="row">
      {/*Search component */}
       <Search/>

      {/*Sort component */}
       <Sort/>
        <div className="col-lg-5">
        <button onClick={this.handleShowInput} type="button" className="btn btn-success btn-lg btn-block">Add Task</button>
        </div>
      </div>
    );
  }
}

export default Form;
