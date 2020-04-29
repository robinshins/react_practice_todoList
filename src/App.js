import React, { Component } from 'react';
import Form from './components/Form'
import TodoListTemplate from './components/ToDoListTemplate'

class App extends Component {
  render() {
    return (
      <TodoListTemplate form = {<Form/>}>
        템플린 완성
        </TodoListTemplate>
    );
  }
}

export default App;