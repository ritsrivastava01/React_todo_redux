import { ADD_TODO, GET_TODO_LIST } from './todo.action.type';

export const getTodoList = () => {
  return { type: GET_TODO_LIST };
};
export const addTodo = (todo) => {
  return { type: ADD_TODO, payload: todo };
};
