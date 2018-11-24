import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
class Form extends Component {
  constructor(props)
  {
    super(props);
    
  this.handleShowInput= this.handleShowInput.bind(this);
  this.handleisShowbutton= this.handleisShowbutton.bind(this);
  }
  handleShowInput()
  {
    this.props.onclickAdd();
  } 
  handleisShowbutton()
  {
    if(!this.props.isShowbutton)
    {
      return <button onClick={this.handleShowInput} type="button" className="btn btn-success btn-lg btn-block">Add Task</button>
    }
    return <button onClick={this.handleShowInput} type="button" className="btn btn-info btn-lg btn-block">Close Form</button>

  }
 render()
  {
    return (
      <div className="row">
      {/*Search component */}
      {/* parm reference props.onclickSearch  */}
       <Search onclickSearch ={this.props.onclickSearch} />

      {/*Sort component */}
       <Sort/>
        <div className="col-lg-5">
         {this.handleisShowbutton()}
        </div>
      </div>
    );
  }
}

export default Form;
