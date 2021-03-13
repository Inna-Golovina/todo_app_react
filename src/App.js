import React, { useState, useEffect } from 'react';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from "./components/TodoList/TodoList";
import './App.css';

const App = () => {

  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterStatus();
    setLocalTodos();
    }, [todos, status]);

  const filterStatus = () => {
    switch(status){
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;

      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;

      default:
        setFilteredTodos(todos);
    }
  };

  const setLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }

    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  }

  return (
    <div className="App">
      <header>
        <h1>Todos list</h1>
      </header>
      <TodoForm
        title={title}
        setTitle={setTitle}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
      {todos.length > 0 && (
        <div className="todo-amount">
          {`${todos.filter(todo => !todo.completed).length} items left`}
        </div>
      )}
    </div>
  );
}

export default App;
