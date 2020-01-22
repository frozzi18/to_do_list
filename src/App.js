import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title:'Take out the trash'
      }
    ]
  }


  render(){
    // render, lifecycle method, the only required. return jsx. Easier way to write js for output. 
    // it is JSX
    // Cannot use class atribute, use className
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
