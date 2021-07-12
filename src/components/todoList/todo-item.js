import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TodoItem = ({ todo, completeTodo, deleteTodo }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Form>
        <a
          style={{ height: '50px' }}
          href="#"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <Form.Check
            className={todo.completed ? 'font-italic' : ''}
            aria-label="option 1"
            label={todo.text}
            onChange={() => setChecked(!checked)}
          />
          {todo.completed ? 'true' : 'false'}
          <span className="badge badge-primary badge-pill"> {todo.type}</span>
          {checked && (
            <>
              <Button size="sm" variant="primary" onClick={completeTodo}>
                Done
              </Button>
              <Button
                variant="secondary"
                style={{ display: checked ? 'block' : 'none' }}
                onClick={deleteTodo}
              >
                Delete
              </Button>
            </>
          )}
        </a>
      </Form>
    </>
  );
};

export default TodoItem;
