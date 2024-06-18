import React from "react";
import { Button } from "react-bootstrap";

const BookDetail = ({ book, onBack }) => {
  return (
    <div className="book-detail">
      <Button variant="secondary" onClick={onBack}>
        Back to List
      </Button>
      <h2>{book.title}</h2>
      <h4>by {book.author}</h4>
      <p>{book.description}</p>
      <img src={book.image} alt={book.title} style={{ width: "100%" }} />
    </div>
  );
};

export default BookDetail;
