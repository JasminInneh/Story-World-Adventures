import React from "react";
import { Modal, Button } from "react-bootstrap";

const BookModal = ({ show, onHide, book }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>by {book.author}</h4>
        <p>{book.description}</p>
        <img src={book.image} alt={book.title} style={{ width: "100%" }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookModal;

// import React from "react";
// import { Modal, Button } from "react-bootstrap";

// const BookModal = ({ show, onHide, book }) => {
//   console.log("Modal show:", show);
//   console.log("Modal book:", book);

//   if (!book) return null; // Ensure book is defined before rendering

//   return (
//     <Modal show={show} onHide={onHide}>
//       <Modal.Header closeButton>
//         <Modal.Title>{book.title}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>by {book.author}</h4>
//         <p>{book.description}</p>
//         <img src={book.image} alt={book.title} style={{ width: "100%" }} />
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default BookModal;

