import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODO_LIST,
} from './todo.action.type';

export const getTodoList = () => {
  return { type: GET_TODO_LIST };
};
export const addTodo = (todo) => {
  return { type: ADD_TODO, payload: todo };
};

export const completeTodo = (index) => {
  return { type: COMPLETE_TODO, payload: index };
};

export const deleteTodo = (index) => {
  return { type: DELETE_TODO, payload: index };
};
