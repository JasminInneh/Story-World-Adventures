import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../styles/mainContent.css"; // Ensure this path is correct

const MainContent = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  }, []);

  return (
    <Container className="main-content">
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
            <h2 className="main-content-banner">Explore, Learn, and Imagine in Every Chapter</h2>
          </div>
        </Col>
      </Row>

      {/* Book Listings */}
      <Row>
        {books.map((book, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card style={{ height: "100%" }}>
              <Card.Img
                variant="top"
                src={book.image}
                alt={book.title}
                style={{ height: "50%" }} // Adjust image height as needed
              />

              <Card.Body className="card-body">
                <Card.Title className="card-title">{book.title}</Card.Title>
                <Card.Text className="card-text">{book.description}</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainContent;

