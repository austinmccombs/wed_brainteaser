import React, { Component } from 'react';
import List from '.List';
import TodoForm from './TodoForm';

class App extends Component {

  state = { todo: [] }

  addTodo = (x) => {
    const { todo } = this.state;
    const random = { id: Math.random(), name: pair, complete: false}
    this.setState({ todo: [random, ...todo]})
  }
  render() {
    const { todo } = this.state
    return (
      <div>
        <ul>
          <TodoForm addItem={this.addItem}/>
          <List 
          name="Learning React"
          items={this.state.todos}
         />
        </ul>
      </div>
    );

  }
    

  }


export default App;
