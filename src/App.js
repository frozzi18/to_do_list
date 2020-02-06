import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title:'Take out the trash',
        completed: false
      },
      {
        id:2,
        title:'Dinner with wife',
        completed: true
      },
      {
        id:3,
        title:'Meeting with my employee',
        completed: false
      }
    ]
  }

// Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id===id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delTodo = (id) => {
    this.setState({ todos : [...this.state.todos.filter(todo => todo.id !==id)]});
  }

  // Add Todo
  addTodo = (title) => {
    console.log(title)
  }

  render(){
    // render, lifecycle method, the only required. return jsx. Easier way to write js for output. 
    // it is JSX
    // Cannot use class atribute, use className
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete = {this.markComplete}
          delTodo={this.delTodo}/>
        </div>
        
      </div>
    );
  }
}

export default App;
