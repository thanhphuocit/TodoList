import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Level from './components/Level';
import List from './components/List';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      strSearch: ''
    };

    this.functionShowInput = this.functionShowInput.bind(this);
    this.functionCancleInput = this.functionShowInput.bind(this);
    this.functionSearch = this.functionSearch.bind(this);
    this.functionHandleSubmit = this.functionHandleSubmit.bind(this);
  }
  functionShowInput() {
    this.setState(
      {
        isShowInput: !this.state.isShowInput,
      });
  }
  functionCancleInput() {
    this.setState(
      {
        isShowInput: false
      });
    }
  functionSearch(value)
  {
    this.setState({
      strSearch: value
    });
  }
  functionHandleSubmit(item)
  {
    console.log(item);
    let {Items} = this.state;
    Items.push({
      name: item.valueNameTask,
      level: +item.valueLevel,
    })
    this.setState({
      Items:Items,
      isShowInput: false
    });
    
  }
  render() {
    let items = this.state.Items;
    let itemsearch =[];
    let isShowbutton = this.state.isShowInput;
    let elmisShowInput = null;
    const valueSearch = this.state.strSearch;
    if (this.state.isShowInput) {
      elmisShowInput = <Level OnClickSubmit={this.functionHandleSubmit} OnClickCancel={this.functionCancleInput} />
    }
    items.forEach((item)=>{
       if(item.name.toLowerCase().indexOf(valueSearch) !== -1)
       {
        itemsearch.push(item)
       }   
    }
    );

    return (
      <div className="container">
        <div className='row'>
          <Title />
          <Form
            onclickSearch={this.functionSearch}
            onclickAdd={this.functionShowInput}
            isShowbutton={isShowbutton}
            strSearch={this.state.strSearch} />
          {elmisShowInput}
          <List items={itemsearch} />
        </div>
      </div>
    );
  }
}

export default App;
