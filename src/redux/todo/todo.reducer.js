import initialState from '../initialState';
import * as type from './todo.action.type';

const todoReducer = (state = initialState.todoList, action) => {
  switch (action.type) {
    case type.GET_TODO_LIST: {
      return state;
    }
    case type.ADD_TODO: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
export default todoReducer;
