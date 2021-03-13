import React from 'react';
import { TodoFormType } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export const TodoForm = ({ title, setTitle, todos, setTodos, setStatus }) => {

  const handleChange = (e) => {
    const { value } = e.target;
      setTitle(value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title) {
      setTodos([
        ...todos,
        {text: title, completed: false, id: uuidv4()}
      ]);
    }

    setTitle("");
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <>
      <div className="wrapper">
        <form className="todo-form">
          <input
            type="text"
            className="todo-input"
            placeholder="Add your new todo"
            value={title}
            onChange={handleChange}
          />
            <button
              type="submit"
              className="todo-button"
              onClick={handleSubmit}
            >
              <i className="fas fa-plus-square" />
            </button>
                    
          <div
            className="todo-select"
            onChange={statusHandler}
          >
            <select
              className="select-todo"
              name="todos"
            >

              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>

            </select>
          </div>
        </form>
      </div>
    </>
  )
};

TodoForm.propTypes = TodoFormType;
