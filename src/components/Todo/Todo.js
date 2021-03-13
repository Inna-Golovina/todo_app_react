import React from 'react';
import { TodoType } from '../../types';
import ClassNames from 'classnames';

export const Todo = ({ text, todo, todos, setTodos }) => {

  const completeTodo = () => {
    setTodos(todos.map((task) => {
      if(task.id === todo.id){
        return {
          ...task, completed: !task.completed
        }
      }

      return task;
    }))
  }

  const deleteTodo = () => {
    setTodos(todos.filter(task => task.id !== todo.id));
  };

  return (
    <>
      <div className="todo">
        <li
          className={ClassNames(
            'todo-task',
            {
              'completed': todo.completed,
            },
          )}
        >
        { text }
        </li>

        <button
          className="complete-button"
          onClick={completeTodo}
        >
          <i className="fas fa-check" />
        </button>

        <button
          className="remove-button"
          onClick={deleteTodo}
        >
          <i className="fas fa-trash" />
        </button>
      </div>
    </>
  )
};

Todo.propTypes = TodoType;
