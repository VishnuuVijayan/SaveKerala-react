import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalOn() {
  const [show, setShow] = useState(true);
  //   const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        onClick={() => {
          window.location = "/admin";
        }}
      >
        <Modal.Title>Authentication Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You should have admin privileges to view this page
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={}>
          Close
        </Button> */}
        <Button
          variant="primary"
          onClick={() => {
            window.location = "/admin";
          }}
        >
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
