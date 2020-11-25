
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todovalue: '', list: [] };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(e) {
    this.setState({ todovalue: e.target.value });
  }

  handleSubmit(e) {

    let todovalue = {
      id: Math.random(),
      value: this.state.todovalue
    };
    let list = this.state.list;
    // console.log("The todo id is: "+todovalue.id);
    list.push(todovalue);
    this.setState({
      list,
      todovalue: ''
    })
  }

  delete( id) {
    let list = this.state.list;
    let updatedList = list.filter(item => item.id !== id);

    this.setState({
      list: updatedList
    });
  }



  render() {
    return (
      <div>
        <h1>A TODO App</h1>
        <input type="text" name='todovalue' placeholder='Enter your todo here!' value={this.state.todovalue} onChange={this.handleChange} />
        <button className='btn' type="submit" onClick={this.handleSubmit}>Add Item</button>
        <br />

        {
          this.state.list.map(item =>
              <li key={item.id}>{item.value}
                <button className='btn' onClick={() => this.delete(item.id)}>Delete Item</button>
              </li>       
          )
        }
      </div>

    );

  }

}
