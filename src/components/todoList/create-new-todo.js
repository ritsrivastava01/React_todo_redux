import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

function CreateNewTodo({ showPopover, saveTodoClick, closeClick }) {
  const newTodo = {
    text: '',
    type: 'family',
    deleted: false,
    completed: false,
  };
  const [todo, setTodo] = useState(newTodo);
  const handleClose = () => {
    setShow(!show);
  };
  const onChangeHandler = (name, value) => {
    console.log(name, value);
    setTodo((todo) => ({
      ...todo,
      [name]: value,
    }));
  };
  return (
    <>
      <Modal show={showPopover} onHide={closeClick}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTodoText">
              <Form.Label>Todo text</Form.Label>
              <Form.Control
                name="text"
                placeholder="Enter todo"
                onChange={() => onChangeHandler('text', event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formTodoType">
              <Form.Label>Todo Type</Form.Label>
              <Form.Control
                defaultValue="family"
                as="select"
                onChange={() => onChangeHandler('type', event.target.value)}
              >
                <option value="family">Family</option>
                <option value="friends">Friends</option>
                <option value="temporary">Temporary</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeClick}>
            Close
          </Button>
          <Button variant="primary" onClick={() => saveTodoClick(todo)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateNewTodo;
