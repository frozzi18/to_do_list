import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:uuid.v4(),
        title:'Take out the trash',
        completed: false
      },
      {
        id:uuid.v4(),
        title:'Dinner with wife',
        completed: true
      },
      {
        id:uuid.v4(),
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

    const newTodo = {
      id:uuid.v4(),
      // title: title, //In esx6 it can be only title
      title,
      completed: false
    }

    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render(){
    // render, lifecycle method, the only required. return jsx. Easier way to write js for output. 
    // it is JSX
    // Cannot use class atribute, use className
    return (

      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route path="/" render={
              props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos} markComplete = {this.markComplete}
                  delTodo={this.delTodo}/>

                </React.Fragment>
              )
            }/>
            
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
