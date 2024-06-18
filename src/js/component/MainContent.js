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
      {/* Central Content */}
      <div className="central-content">
        <img
          src="https://i.ibb.co/JBxqc7N/main-Content.jpg"
          alt="animated character flying with a book opened as wings"
          className="central-image"
        />
        <h2>Explore, Learn, and Imagine in Every Chapter</h2>
      </div>

      {/* Book Listings */}
      <Row>
        {books.map((book, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={`/img/${book.image}`}
                alt={book.title}
              />

              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
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
