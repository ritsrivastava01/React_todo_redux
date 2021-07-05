import { Button } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todo/todo.action';

function index({ todoList, addTodo }) {
  console.log(todoList);

  const addTodoClick = () => {
    const newTodo = {
      text: 'todo 2',
      type: 'family',
      deleted: false,
      completed: false,
    };
    addTodo(newTodo);
  };
  return (
    <div>
      <Button onClick={addTodoClick}>Add todo</Button>
      {todoList.map((x, i) => {
        return <span key={i}>{x.text}</span>;
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
