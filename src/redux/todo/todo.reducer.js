import initialState from '../initialState';
import * as type from './todo.action.type';

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_TODO_LIST: {
      console.log(state.todoList);
      return state.todoList;
    }
    case type.ADD_TODO: {
      console.log(state);
      const test = {
        ...state,
        todoList: state.todoList.push(action.payload),
      };
      console.log(test);
      return test;
      //return { ...state, todoList: state.todoList.push(action.payload) };
    }
    default:
      return state;
  }
};
export default todoReducer;
