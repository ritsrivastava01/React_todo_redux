import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    >
      {todo.text}
      <span className="badge badge-primary badge-pill"> {todo.type}</span>
    </a>
  );
};

export default TodoItem;
