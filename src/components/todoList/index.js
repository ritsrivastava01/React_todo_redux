import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todo/todo.action';
import TodoItem from './todo-item';
import CreateNewTodo from './create-new-todo';

function index({ todoList, addTodo }) {
  const [popOver, setPopOver] = useState(false);

  const addTodoClick = () => {
    setPopOver(true);
    // const newTodo = {
    //   text: 'todo 2',
    //   type: 'family',
    //   deleted: false,
    //   completed: false,
    // };
    // addTodo(newTodo);
    console.log('index.js', popOver);
  };
  const addTodoClickHandler = () => {
    console.log('aaya');
  };
  return (
    <>
      <Button onClick={addTodoClick}>Add todo</Button>

      <div className="list-group">
        {todoList.map((x, i) => {
          return <TodoItem todo={x} key={i}></TodoItem>;
        })}
      </div>
      <CreateNewTodo
        showPopover={popOver}
        addTodoClick={addTodoClickHandler}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
