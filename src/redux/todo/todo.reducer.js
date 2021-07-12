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
    case type.COMPLETE_TODO: {
      console.log('complete todo ', action.payload);
      [
        ...state,
        (state[action.payload].completed = !state[action.payload].completed),
      ];
      console.log(state);
      return state;
    }
    case type.DELETE_TODO: {
      console.log('Delete todo ', action.payload);
      return state;
    }

    default:
      return state;
  }
};
export default todoReducer;
