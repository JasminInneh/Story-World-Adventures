import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import BookModal from "../component/BookModal";
import "../../styles/mainContent.css";

const MainContent = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const booksSectionRef = useRef(null);
  const isMounted = useRef(true); // useRef to track component mount state

  useEffect(() => {
    // Set isMounted to true when component mounts
    isMounted.current = true;

    fetch("/books.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Only update state if component is still mounted
        if (isMounted.current) {
          setBooks(data);
        }
      })
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );

    // Clean up function to cancel fetch if component unmounts
    return () => {
      isMounted.current = false; // Set isMounted to false when component unmounts
    };
  }, []); // Empty dependency array ensures effect runs only once

  const handleShowModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  return (
    <Container className="main-content">
      {/* Central Content */}
      <Row>
        <Col md={6} className="d-flex align-items-center">
          <div className="central-content">
            <img
              src="https://i.ibb.co/myLJDGN/banner5.jpg"
              alt="animated character flying with a book opened as wings"
              className="central-image"
            />
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h2 className="main-content-banner">
              Explore, Learn, and Imagine in Every Chapter
            </h2>
          </div>
        </Col>
      </Row>

      {/* Book Listings */}
      <Row>
        {books.map((book, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4" ref={booksSectionRef}>
            <Card style={{ height: "100%" }}>
              <Card.Img
                variant="top"
                src={book.image}
                alt={book.title}
                style={{ height: "50%" }}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">{book.title}</Card.Title>
                <Card.Text className="card-text">{book.description}</Card.Text>
                <Button variant="primary" onClick={() => handleShowModal(book)}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      {selectedBook && (
        <BookModal
          show={showModal}
          onHide={handleCloseModal}
          book={selectedBook}
        />
      )}
    </Container>
  );
};

export default MainContent;



