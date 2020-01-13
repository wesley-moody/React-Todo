import React, { Component } from "react";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: tasks
    };
  }
  toggleItem = id => {
    console.log(this.state.todoList)
    const newTodoList = this.state.todoList.map(item => {
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    })
  }

  addItem = itemTask => {
    const newItem = {
      task: itemTask,
      id: Date.now(),
      completed: false
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

      </div>
    );
  }
}

export default App;
