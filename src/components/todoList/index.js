import { Button } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todo/todo.action';
import TodoItem from './todo-item';

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

      <div className="list-group">
        {todoList.map((x, i) => {
          return <TodoItem todo={x} key={i}></TodoItem>;
        })}
      </div>
    </div>
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
