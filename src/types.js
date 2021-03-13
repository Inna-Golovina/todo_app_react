import PropTypes from 'prop-types';

export const TodoType = {
  text:PropTypes.string.isRequired,
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export const TodoFormType = {
  title:PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export const TodoListType = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};