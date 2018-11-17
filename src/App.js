import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Level from './components/Level';
import List from './components/List';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Items: [{
        name: 'Leaning reactjs',
        level: 0,
      },
      {
        name: 'Leaning javascript',
        level: 1,
      },
      {
        name: 'Leaning Jquery',
        level: 2,
      },
      ],
      isShowInput: false,
    };

    this.functionShowInput = this.functionShowInput.bind(this);
  }
  functionShowInput()
  {
     this.setState(
       {
          isShowInput: !this.state.isShowInput
       });
  }
  render() {
    let items =this.state.Items;
    let elmisShowInput = null;
    if(this.state.isShowInput)
    {
      elmisShowInput = <Level/>
    }
    return (
      <div className="container">
      <div className='row'>
        <Title />
        <Form onclickAdd={this.functionShowInput}/>
       {elmisShowInput}
        <List items={items}/>
        </div>
      </div>
    );
  }
}

export default App;
