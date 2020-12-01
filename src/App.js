
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todovalue: '', list: [] };

    this.keyPress = this.keyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
    
  }
  
  handleChange(e) {
    this.setState({ todovalue: e.target.value });
  }

  keyPress(e){
    if(e.keyCode == 13){
       this.handleSubmit();
       e.preventDefault();
    }
 }

  handleSubmit(e) {
    if(this.state.todovalue==''){
      alert('Please fill out the field before adding the item!')
      e.preventDefault();
    }
    else
    {
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
      <div class="content">
        <form>
        <h1>A TODO App</h1>
        <input type="text" name='todovalue' placeholder='Enter your todo here!' value={this.state.todovalue} onChange={this.handleChange} onKeyDown={this.keyPress}/>
        <button className="btn" type="button"onClick={this.handleSubmit}><AddIcon/></button>
        <br />
        </form>
        
        {
          this.state.list.map(item =>  <ul>
              <li key={item.id}><span>{item.value}
                <button className='btn' onClick={() => this.delete(item.id)}><DeleteIcon/></button></span>
              </li>  </ul>   
          )
        }
         
      </div>

    );

  }

}
