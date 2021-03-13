import React from 'react';
import { Todo } from '../Todo/Todo';
import { TodoListType } from '../../types';

export const TodoList = ({ todos, setTodos, filteredTodos }) => {

  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </>
  )
};

TodoList.propTypes = TodoListType;
