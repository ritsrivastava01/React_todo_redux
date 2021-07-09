import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

function CreateNewTodo({ showPopover, addTodoClick }) {
  const [show, setShow] = useState(showPopover);
  console.log(show);
  const handleClose = () => {
    setShow(!show);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addTodoClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateNewTodo;
