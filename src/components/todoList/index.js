import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  completeTodo,
} from '../../redux/todo/todo.action';
import TodoItem from './todo-item';
import CreateNewTodo from './create-new-todo';

function index({ todoList, addTodo, completeTodo, deleteTodo }) {
  const [popOver, setPopOver] = useState();

  const addTodoClick = () => {
    setPopOver(true);
    console.log('index.js', popOver);
  };
  const saveTodoClickHandler = (todo) => {
    addTodo(todo);
    setPopOver(false);
  };
  const closeClickHandler = () => {
    setPopOver(false);
  };
  const completeTodoHandler = (index) => {
    completeTodo(index);
  };

  const deleteTodoHandler = (index) => {
    deleteTodo(index);
  };

  return (
    <>
      <Button onClick={addTodoClick}>Add todo</Button>

      <div className="list-group">
        {todoList.map((x, i) => {
          return (
            <TodoItem
              todo={x}
              key={i}
              completeTodo={() => completeTodoHandler(i)}
              deleteTodo={() => deleteTodoHandler(i)}
            ></TodoItem>
          );
        })}
      </div>
      <CreateNewTodo
        showPopover={popOver}
        saveTodoClick={saveTodoClickHandler}
        closeClick={closeClickHandler}
      ></CreateNewTodo>
    </>
  );
}
const mapStateToProps = (state) => {
  console.log('update todo', state);
  return {
    todoList: state.todo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    deleteTodo: (index) => dispatch(deleteTodo(index)),
    completeTodo: (index) => dispatch(completeTodo(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
