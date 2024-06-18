import React from "react";
import { Modal, Button } from "react-bootstrap";

const BookModal = ({ show, onHide, book }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{book.description}</p>
        <p><strong>Author:</strong> {book.author}</p>
        <img src={book.image} alt={book.title} style={{ width: "100%" }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookModal;
